import re


class Comment:
    threadEtag = ''
    threadId = ''
    commentEtag = ''
    commentId = ''
    channelId = ''
    videoId = ''
    textDisplay = ''
    textOriginal = ''
    authorDisplayName = ''
    authorProfileImageUrl = ''
    authorChannelUrl = ''
    authorChannelId = ''
    canRate = False
    viewerRating = ''
    likeCount = 0
    publishedAt = ''
    updatedAt = ''
    canReply = False
    totalReplyCount = 0
    isPublic = False

    def __init__(self, text):
        checkBool = ''
        toInt = ''
        etagRegex = re.compile("etag")
        idRegex = re.compile("id")
        channelIdRegex = re.compile("channelId")
        videoIdRegex = re.compile("videoId")
        textDisplayRegex = re.compile("textDisplay")
        textOriginalRegex = re.compile("textOriginal")
        authorDisplayNameRegex = re.compile("authorDisplayName")
        authorProfileImageUrlRegex = re.compile("authorProfileImageUrl")
        authorChannelUrlRegex = re.compile("authorChannelUrl")
        authorChannelIdRegex = re.compile("authorChannelId")
        canRateRegex = re.compile("canRate")
        viewerRatingRegex = re.compile("viewerRating")
        likeCountRegex = re.compile("likeCount")
        publishedAtRegex = re.compile("publishedAt")
        updatedAtRegex = re.compile("updatedAt")
        canReplyRegex = re.compile("canReply")
        totalReplyCountRegex = re.compile("totalReplyCount")
        isPublicRegex = re.compile("isPublic")
        topLevelCommentRegex = re.compile("topLevelComment")
        substring = text[videoIdRegex.search(text).end() + 4: len(text)]

        self.threadEtag = text[etagRegex.search(
            text).end() + 4: idRegex.search(text).start() - 4]

        self.threadId = text[idRegex.search(text).end(
        ) + 4: channelIdRegex.search(text).start() - 16]

        self.commentEtag = substring[etagRegex.search(
            substring).end() + 4: idRegex.search(substring).start() - 4]

        self.commentId = substring[idRegex.search(substring).end(
        ) + 4: channelIdRegex.search(substring).start() - 16]

        self.channelId = text[channelIdRegex.search(
            text).end() + 4: videoIdRegex.search(text).start() - 4]

        self.videoId = text[videoIdRegex.search(
            text).end() + 4: topLevelCommentRegex.search(text).start() - 4]

        self.textDisplay = text[textDisplayRegex.search(
            text).end() + 4: textOriginalRegex.search(text).start() - 4]

        self.textOriginal = text[textOriginalRegex.search(text).end(
        ) + 4: authorDisplayNameRegex.search(text).start() - 4]

        self.authorDisplayName = text[authorDisplayNameRegex.search(
            text).end() + 4: authorProfileImageUrlRegex.search(text).start() - 4]

        self.authorProfileImageUrl = text[authorProfileImageUrlRegex.search(
            text).end() + 4: authorChannelUrlRegex.search(text).start() - 4]

        self.authorChannelUrl = text[authorChannelUrlRegex.search(
            text).end() + 4: authorChannelIdRegex.search(text).start() - 4]

        self.authorChannelId = text[authorChannelIdRegex.search(
            text).end() + 14: canRateRegex.search(text).start() - 5]

        checkBool = text[canRateRegex.search(text).end(
        ) + 3: viewerRatingRegex.search(text).start() - 3]
        self.canRate = toBool(checkBool)

        self.viewerRating = text[viewerRatingRegex.search(
            text).end() + 4: likeCountRegex.search(text).start() - 4]

        toInt = text[likeCountRegex.search(
            text).end() + 3: publishedAtRegex.search(text).start() - 3]
        self.likeCount = int(toInt)

        self.publishedAt = text[publishedAtRegex.search(
            text).end() + 4: updatedAtRegex.search(text).start() - 4]

        self.updatedAt = text[updatedAtRegex.search(
            text).end() + 4: canReplyRegex.search(text).start() - 6]

        checkBool = text[canReplyRegex.search(text).end(
        ) + 3: totalReplyCountRegex.search(text).start() - 3]
        self.canReply = toBool(checkBool)

        toInt = text[totalReplyCountRegex.search(text).end(
        ) + 3: isPublicRegex.search(text).start() - 3]
        self.totalReplyCount = int(toInt)

        checkBool = text[isPublicRegex.search(text).end(
        ) + 3: len(text)]
        checkBool = checkBool.rstrip(" }],")
        self.isPublic = toBool(checkBool)


def toBool(string):
    if (string == "True"):
        return True
    else:
        return False


def addChar(char):
    if (char == '\''):
        return ""
    else:
        return char

    # return (self)
