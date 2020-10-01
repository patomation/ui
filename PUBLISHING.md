# PUBLISHING steps

1. update package.json version

2. publish to npm
```
npm publish
```

3. commit changes
```
git add .
git commit -m "chore(publish): version 1.0.1"
```

4. use next git tag following symantec versions same as package
```
git tag 1.0.1
```

5 push changes and tags
```
git push && git push --tags
```