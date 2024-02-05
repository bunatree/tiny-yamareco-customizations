# ヤマレコ山行記録の写真ギャラリーのカスタマイズ

ヤマレコの山行記録ページの写真ギャラリーに表示される写真の縦横比を変更するための JavaScript と CSS が含まれています。

2024/01/30 に Web 版ヤマレコの全体的なデザインのリニューアルが行われ、山行記録の写真が正方形に切り取られてタイル状に並ぶようになりました。

このデザイン変更は、縦横比などを丹念に考えて写真撮影をしてきたユーザーの皆さんに不評なようです。

そこで、「自分用に、元の縦横比で表示される」というカスタマイズを行うための JavaScript と CSS を作りました。

当レポジトリの custom.js と custom.css の内容を、Chromeの拡張機能である「Custom Style Script」のそれぞれのテキストエリアにコピー＆ペーストしてください。

Custom Style Scriptは、下記の URL から入手できます。
https://chromewebstore.google.com/detail/custom-style-script/ecjfaoeopefafjpdgnfcjnhinpbldjij

このカスタマイズは、設定を行ったブラウザーにのみ適用されます。自分が設定済みのブラウザーでヤマレコ山行記録を閲覧するときはカスタマイズが効いて写真が長方形表示になりますが、それ以外のブラウザーでは写真は正方形のままです。

また、動作確認は、当方の MacBook Air 13 (Retina) + Google Chrome (Brave) でのみ行っています。

メロンパン