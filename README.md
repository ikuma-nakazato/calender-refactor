# Git 01

**目的: Gitを利用した、基本的なチーム開発の流れを理解する**  

1. この**リポジトリ**を**ローカル**に`clone`
1. `members/README.md`に自分の情報を追加
1. `master`の`HEAD`から新しい**ブランチ**(自分の名前にする; 例: `showsay-you`)を分岐させる
1. 新しいブランチに`commit`し、**リモート**に`push`する
1. github.com上で、`master`ブランチへの`pull request`を送る

### `commit`について

- `commit`は小さな変更の単位
- `commit`の目的を説明するために、`commit message`を記述する
- `commit message`は`<prefix>: Message`の書式
- 例: `Feature: Implement NameResolver class`
- `<prefix>`は、コミットの種類を説明する

### 参考: `commit message prefix`一覧

- `Feature`: 新たな機能の追加
- `Refactor`: 機能を維持したコードの変更
- `Style`: インデントなど、コードスタイルの変更
- `Document`: ドキュメントへの変更
- `Chore`: ライブラリのロードなど、各種設定ファイルの変更

### ブランチについて

- 開発の枝
- 複数のブランチ上で複数人が並行して作業を行い、それらブランチを`merge`して最終的に一つの生成物を作る

# Git 02

**目的: forkを理解する**

1. このリポジトリを自分のアカウントに`fork`
1. `accounts/README.md`に自分の情報を追加
1. フォークした自分のリポジトリの`master`ブランチに`commit`し、`push`する
1. 自分のリポジトリからこのリポジトリへの`pull request`を送る

なお、`pull request`が承認されたあとは、自分のアカウントに`fork`したリポジトリを削除しても良い

# Git 03

**目的: Gitの複雑な操作を理解する**

1. ローカルに新たなリポジトリを作成する
1. `master`ブランチにて適当な`commit`を3件行い、それらを`squash`してみる
1. `master`ブランチの`HEAD`から、新たなブランチ`dev-master`を分岐させ、そのブランチ上で適当な`commit`を数件行う
1. `dev-master`ブランチを`master`ブランチにマージする
1. `interactive rebase`を用いて、過去のコミットメッセージを編集してみる

# Docker 01

**目的: 基本的なコンテナ操作を理解する**

1. Git 01でクローンしたフォルダ`exercise`内に、`exercise/html/index.php`ファイルを作成する
1. `index.php`ファイルに`<?php phpinfo();`と記述する
1. `php:7.2-apache`イメージを利用し、コンテナを立ち上げる; ポートフォーワーディング(`1234:80`)とディスクのマウント(`.:/var/www`)を設定すること
1. `http://localhost:1234`にアクセスし、`phpinfo()`が表示されていることを確認

### Dockerについて

- Linux Container技術を用いて、コンテナ(最初のうちは軽量な仮想マシンと思って良い)を作成するツール
- Linux環境を手軽に利用できるため、Web開発で重宝する

# Docker 02

**目的: docker-composeによるコンテナ立ち上げの自動化を学習する**

1. Docker 01で行った作業を自動化するために、`docker-compose.yml`ファイルを作成する; 書式は自分で調べること
1. `docker-compose.yml`ファイルの記述を終えたら、`docker-compose up -d`コマンドでコンテナを立てる

### Docker Composeについて

- Docker 01で理解した通り、dockerコマンドは複雑であり、実行するたびに記述するのは効率が悪い
- そこで、コマンドを文書化し、簡単にコンテナを立てることができるようにするツールがDocker Composeである

# PHP 01

**目的: 基本的な入出力を理解する**

**ここでは、Docker 01及び02で構築した環境を利用する**

1. `index.php`内で`phpinfo();`の代わりに文字列`Hello World!`を出力する
1. `index.php`内で`$_GET`パラメータ`message`を受け取り、`htmlspecialchars`関数でエスケープして出力する
1. `http://localhost:1234/?message=hello`にアクセスし、`hello`と表示されていることを確認する
1. 表示されていることを確認したら、ローカルリポジトリに`commit`する

# PHP 02

**目的: 変数のスコープを理解する**

**ここでは、Docker 01及び02で構築した環境を利用する**

1. 以下のコードを入力し、`33-4`と表示されることを確認する
1. 表示されていることを確認したら、ローカルリポジトリに`commit`する

```php
// index.php
<?php

function print_number(): void
{
    $c = 33;
    echo $c, '-';
}

$c = 4;
print_number();
echo $c, PHP_EOL;
```

### 参考: 変数のスコープについて

**PHPのスコープは関数レベルである**ので、関数内外を跨いだ変数の共有は不可能である。変数を共有したい際には引数及び戻り値を利用する

# PHP 03

**目的: Composerによる依存解決の学習, クラスと名前空間の理解, use文の利用, foreach文の理解, HTML/CSSの理解**

**ここでは、Docker 01及び02で構築した環境を利用する**

1. PHP 01及び02で行った作業をGitを用いて破棄する
1. `composer init`コマンドで依存ライブラリの解決を行う設定ファイル`composer.json`を生成する
1. `composer require strictphp/date`で日付ライブラリ`strictphp/date`をロードする
1. `index.php`にて`vendor/autoload.php`ファイルを`require`する
1. 日付ライブラリを利用するために、ファイルの先頭に`use Strict\Date\Months\YMMonth;`と記述する
1. `$_GET`パラメータ`year`と`month`を受け取り、その値をチェックしてから`YMMonth`クラスを`new`してみる
1. `foreach`文を用いて、作った`YMMonth`クラスの変数を回してみる
1. 最後に、`$_GET`パラメータで受け取った年月のカレンダーを作成する
1. 完成したら、ローカルリポジトリに`commit`し、リモートに`push`する

# PHP 04

**目的: PSR-4オートローディングの理解**

**ここでは、Docker 01及び02で構築した環境を利用する**

1. `exercies`内に`exercise/src`ディレクトリを作成する
1. `composer.json`に`autoload`の項目を追加し、名前空間`Goodlife\Exercise`をディレクトリ`src/`にマッピングする; PSR-4`及び`composer PSR-4`で検索すると良い
1. `src`ディレクトリ以下にファイル`MyClass.php`を作成し、ファイル内にてクラス`Goodlife\Exercise\MyClass`を宣言する
1. `MyClass`に`public`な`helloWorld`メソッドを追加し、メソッド内で`echo 'Hello World!';`を行う
1. `html/index.php`内で`MyClass`インスタンスを作成し、`helloWorld`メソッドを呼ぶ

# PHP 05

**目的: PSR-4オートローディングへの習熟**

# PHP 06

**目的: Laravelを利用した掲示板アプリケーションを作成する**

1. 自身のアカウントにリポジトリ`gl-exercise-bbc`を作成する
1. プロジェクトフォルダにて`composer create-project --prefer-dist laravel/laravel gl-exercise-bbc "5.5.*"`を実行する
1. ユーザー管理システムを作成する
1. ログインしたユーザーのみ書き込みが可能で、ログインしていないユーザーは読み込みのみが可能な掲示板を作成する