# -*- coding: utf-8 -*-

# Sample Python code for youtube.commentThreads.list
# See instructions for running these code samples locally:
# https://developers.google.com/explorer-help/code-samples#python

import os

import googleapiclient.discovery
from .Comment import Comment


def Scraper():
    # Disable OAuthlib's HTTPS verification when running locally.
    # *DO NOT* leave this option enabled in production.
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    DEVELOPER_KEY = "AIzaSyBCP0Ab51R176kYVG9yDc9pPkpzegJAE-0"

    # Honestly, don't ask me how the api works. I just know this gets me what I want
    youtube = googleapiclient.discovery.build(
        api_service_name, api_version, developerKey=DEVELOPER_KEY)

    request = youtube.commentThreads().list(
        part="snippet",
        maxResults=100,
        textFormat="plainText",
        videoId="GHBGKBPwQ1Y",
    )

    # Get comments from the api
    response = str(request.execute())
    # response2 = request.execute()

    # Format the comments into an array of strings
    comments = createComment(response)

    # Turn the strings into an array of Comment objects
    objectComments = [Comment(comments[1])]
    for x in comments:
        if (x.find('videoId') != -1):
            objectComments.append(Comment(x))

    # Remove the redundant object
    objectComments.pop(0)

    return (objectComments)


# Process input into an array of strings to be turned into Comment Objects
def createComment(commentInfo):
    comments = [""]             # Array to hold the strings
    index = 0                   # Index of the current string
    closeBrackets = 0           # Number of } characters seen
    openBrackets = 0            # Number of { characters seen
    buffer = 0                  # Needed a buffer to capture some characters.
    previouschar = ''           # Needed to check for things like newline characters

    for character in commentInfo:
        # since it's written as a string, newline characters aren't propperly picked up. This is to recapture them.
        if (character == 'n' and previouschar == '\\'):
            character = '\n'
            comments[index] = comments[index].rstrip(comments[index][-1])
        if (character == '\'' and previouschar == '\\'):
            character = '\''
            comments[index] = comments[index].rstrip(comments[index][-1])

        # add the current character to the current string
        comments[index] += character

        # if we see an open bracket
        if (character == "{"):
            openBrackets = openBrackets + 1                     # increment the counter

            # After we've seen 3 open brackets, we're past the first chunk.
            # The first chunk has info pertaining to the whole request, and throws off the rest of the loop unless we separate it.
            # That's why I append a new element to start the real work in.
            if (openBrackets == 3):
                comments.append("{")
                comments[index] = comments[index].rstrip("{")
                index = index + 1

        # We're past the first chunk, so this is the real data processing.
        if (openBrackets >= 2):
            # If we've seen 5 closed brackets, we need to start adding to the buffer to get the last few characters.
            if (closeBrackets >= 5):
                buffer = buffer + 1
            # If the character is a close bracket, we add to the number we've seen.
            if (character == "}"):
                closeBrackets = closeBrackets + 1
            # If we've seen 5 close brackets and gone through the buffer: reset those values, create a new string and move to the next index.
            if (closeBrackets >= 5 and buffer >= 2):
                buffer = 0
                closeBrackets = 0
                comments.append("")
                index = index + 1

        previouschar = character

    # Finally, strip off any excess white space from the left of each string.
    index = 0
    for i in comments:
        comments[index] = i.lstrip()
        index = index + 1

    return comments


# if __name__ == "__main__":
#     main()
