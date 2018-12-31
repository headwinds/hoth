from routes.index import (
    IndexEndPoint,
)

from routes.twitter import (
    TwitterEndPoint,
)

route_dict = {
    "/": IndexEndPoint,
    "/twitteraaaaaa/auth": TwitterEndPoint, # CORS ISSUE!
}