Trov Code Test For Jedidja
==========================

A.
I chose to return JSON, adding a camel case property names contract resolver to the serializer.  This way, javascript applications will receive javascript objects with proper casing, making it the easiest to use choice.

B.
One way the system could be set up to secure buy requests to known users would be through OAuth.  The controller actions could then be locked down with a decorator attribute that verifies the previously issued token sent along in the request.