# fe-configs
@jump24 config npm packages for frontend use.

## Updating packages
First you will need to login to your @jump associated npm account:
```bash
npm login
```

Once you have made changes to the configs, commit and push your changes.

Afterwards add a new version to the packages:
```bash
lerna version
```

Finally packages via the git tags, like below:
```bash
lerna publish from-git
```
