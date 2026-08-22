# KOUDAI TAMURA — PORTFOLIO

田村昂大のWebアプリ制作、YouTube運用、使用ツールを1ページにまとめた面接用ポートフォリオです。HTML / CSS / JavaScriptだけで動く軽量な構成にしています。

## 起動方法

このフォルダをWebサーバーで配信してください。VS CodeのLive Server、Pythonの簡易サーバーなどが使えます。

```bash
python -m http.server 8000
```

その後、ブラウザで `http://localhost:8000/` を開きます。`file://` でも表示できますが、Webサーバー経由の確認を推奨します。

## GitHub Pagesで公開する

1. このフォルダのファイルをGitHubリポジトリへpushします。
2. GitHubの `Settings` → `Pages` を開きます。
3. `Deploy from a branch` を選び、公開したいブランチと `/ (root)` を指定して保存します。
4. 表示されたGitHub Pages URLへアクセスして、外部リンクとスマートフォン表示を確認します。

## 内容を変更する

更新頻度の高い情報は `data.js` にまとめています。名前、キャッチコピー、作品名、説明、技術タグ、作品URL、画像パス、YouTubeの数字、ABOUTの好きなものなどを変更できます。

### YouTube数字の変更

`data.js` の `youtube` 内にある `subscribers` と `totalViews` を書き換えます。

### 作品を追加する

`data.js` の `works` 配列へ、既存作品と同じ形式のオブジェクトを追加します。`number`、`name`、`description`、`technologies`、`image`、`imageAlt`、`imageType`、`url` を設定してください。`imageType` は横長画面なら `desktop`、スマートフォン画面なら `mobile` です。

### スクリーンショットを差し替える

`images/` にPNGまたはWebP画像を置き、`data.js` の該当作品の `image` を新しいパスへ変更します。画像は公開中アプリの実画面を使い、不要なブラウザUIを含めない形にしてください。

## ファイル構成

```text
index.html   ページの骨組み
style.css    レイアウト、色、レスポンシブ対応
data.js      作品・プロフィール・YouTube・ツール情報
app.js       data.jsから各カードを描画する処理
images/      各作品のスクリーンショット
```

## 注意

外部アプリとYouTubeのリンクは新しいタブで開きます。画像を追加・更新したときは、PC幅とスマートフォン幅の両方でカードの崩れがないことを確認してください。
