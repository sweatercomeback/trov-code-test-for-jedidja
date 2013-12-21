Trov Code Test For Jedidja
==========================

A.
I chose to return JSON, adding a camel case property names contract resolver to the serializer.  This way, javascript applications will receive javascript objects with proper casing, making it the easiest to use choice.  You will find two calls (one GET and one POST) in Scripts/app.js.

B.
One way the system could be set up to secure buy requests to known users would be through OAuth.  The user can authenticate with the OAuth server and receive a token.  The controller actions could then be locked down with a decorator attribute that verifies the previously issued token sent along in the request is still valid.