# ポートフォリオの編集ガイド

ビルド不要のHTML・CSS・JavaScriptで構成しています。既存のREADME.mdは変更していません。

## ファイル構成

```text
index.html                トップページ：自己紹介・作品一覧・リンク
style.css                 全ページ共通のデザイン・スマートフォン表示
script.js                 フッターの年を自動更新
projects/
  thesausage.html          BeyondTheSausageの作品紹介
  siv3d-game.html          GOATの作品紹介
  handinhand.html         TGS 2025展示作品
  detectackle.html        デカタックル
  workingjumpman.html     高梁市Unityゲームジャム2025作品
  lastpenguin.html        高梁市Unityゲームジャム2024作品
  _template.html          新しい作品用の複製元
images/
  thesausage/             BeyondTheSausageの画像
  siv3d/                  Siv3D作品の画像
  profile/                プロフィール画像
```

空の画像フォルダをGitに保存するため、各フォルダに.gitkeepを置いています。画像追加後は削除しても構いません。動画は外部の公開動画へのリンクを想定しています。ローカル動画を使う場合にvideos/を追加してください。

## 最初に編集する箇所

1. index.htmlの表示名、キャッチコピー、自己紹介、技術・ツールを自分の内容に調整します。
2. 各作品ページの制作期間・人数・担当範囲と「準備中」の本文を埋めます。
3. 実装の工夫は「どんな課題があったか」「なぜその方法を選んだか」「結果はどうなったか」の順で記載します。チーム制作では自分が担当した範囲を明記します。
4. スクリーンショット、プレイ動画、公開できるコードへのリンクを追加します。
5. 内容が揃ったら、トップの「紹介ページ準備中」と作品ページの準備中表示を削除します。

掲載技術は会話で挙がった内容をもとにした初期値です。実際の経験や作品の仕様に合わせて修正してください。

## 画像を追加する

例としてimages/thesausage/main.webpを配置します。ファイル名は英数字とハイフンに揃えると扱いやすくなります。

トップの該当作品カードにあるproject-visualのdivを、以下に置き換えます。

```html
<img class="project-image" src="images/thesausage/main.webp"
     alt="ゲーム画面の内容を具体的に説明" width="1280" height="720" loading="lazy">
```

作品紹介ページには次のように追加します。widthとheightは実際の画像サイズに合わせてください。

```html
<img class="detail-image" src="../images/thesausage/main.webp"
     alt="ゲーム画面の内容を具体的に説明" width="1280" height="720">
```

トップはimages/、projects/内のページは../images/と、参照元からの相対パスで指定します。

## 新しい作品を追加する

1. projects/_template.htmlを複製し、projects/new-game.htmlなどの名前にします。
2. title、description、見出し、使用技術、作品概要と本文を編集します。
3. images/new-game/を作り、画像を配置します。
4. index.htmlのproject-grid内にあるarticleを1つ複製し、作品名・説明・画像・hrefを更新します。

テンプレート自体は作品一覧からリンクしていませんが、リポジトリとともに公開されるファイルです。非公開の情報は書かないでください。

## 表示を確認する

index.htmlをブラウザで開くとローカルで確認できます。作品ページへの移動、一覧に戻るリンク、狭い画面での表示を確認します。JavaScriptが無効でも本文やリンクを利用できます。

## GitHub Pagesに反映する

このファイル構成はリポジトリのルートからの公開を想定しています。既存のGitHub Pages設定で公開元がmainブランチのルートになっていれば、変更をコミット・プッシュすると公開処理の対象になります。docs/や独自のActions構成を使用している場合は、その公開元に合わせて配置してください。

今回の追加作業では、コミット・プッシュ・GitHub Pagesの設定変更は行っていません。

## 開発経験の掲載内容について

6作品の概要、制作期間、担当、関連リンクを掲載しています。BeyondTheSausageの個別の担当役職は未提供のため、推測して記載していません。高梁市2025作品は正式タイトルが確認できなかったため、ゲーム内容で表記しています。

GOATはC++ / Siv3D、制作期間は2025/10/18〜11/2（約2週間）として掲載しています。公式受賞結果に合わせ、エントリー規模は185名・56作品としています。Siv3Dの開発元をバンダイナムコとする説明は掲載していません。

BeyondTheSausageの最終選抜・約50万円の支援と各作品の担当役割は、本人から提供された内容に基づきます。作品画像と具体的な実装機能は、情報が揃った段階で各ページへ追加できます。
