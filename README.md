# Action Remove Labels

<a href="https://github.com/rogerluan/label-remover/actions?query=workflow%3A%22Unit+Tests%22">
  <img alt="Unit tests status" src="https://github.com/rogerluan/label-remover/workflows/Unit%20Tests/badge.svg">
</a>
<a href="https://twitter.com/intent/follow?screen_name=rogerluan_">
  <img src="https://img.shields.io/twitter/follow/rogerluan_?&logo=twitter" alt="Follow on Twitter">
</a>


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
      - uses: rogerluan/label-remover@v1.0.0
        with:
          github_token: ${{ secrets.github_token }}
```

## License

Copyright 2020 Roger Oba.

_Label Remover_ is released under the [MIT License](./LICENSE).
