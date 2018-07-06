# hello-emoji

An option to get a list of emoji

```
curl -o https://www.unicode.org/Public/emoji/5.0/emoji-test.txt
grep fully-qualified emoji-test.txt |cut -f 1 -d ';'
```
