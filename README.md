# Action Remove Labels

<p align="center">
  <a href="https://github.com/rogerluan/action-remove-labels/actions?query=workflow%3AUnit%20Tests"><img alt="Unit tests status" src="https://github.com/rogerluan/action-remote-labels/workflows/Unit%20Tests/badge.svg"></a>
  <br>
  <a href="https://twitter.com/intent/follow?screen_name=rogerluan_">
        <img src="https://img.shields.io/twitter/follow/rogerluan_?&logo=twitter"
            alt="Follow on Twitter"></a>
</p>

This GitHub Action will remove all labels of a PR upon trigger. This is specially useful if you execute this action upon pull request merge/close.

## Usage

Add a GitHub action.

```yaml
name: Remove All Labels

on:
  pull_request:
    types: [closed]

jobs:
  remove_labels:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: rogerluan/label-remover@v1
        with:
          github_token: ${{ secrets.github_token }}
          labels: |
            approved
```

## License

Copyright 2020 Roger Oba.

_Label Remover_ is released under the [MIT License](./LICENSE).
