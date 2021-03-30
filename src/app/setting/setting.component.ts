import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';

export interface DialogData {
  res: string;
}

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  connectedGitHub = false;

  res: string;

  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  deleteUser() {
    this.openDialog().then(() => {
      if (this.res === '削除する') {
        this.authService.deleteUser();
        this.res = '';
      }
    });
  }

  // ダイアログが閉じられるまで次の処理を待機するため、
  // この関数の戻り値はPromise<void>にしている。
  openDialog(): Promise<void> {
    return new Promise((resolve, reject) => {
      const dialogRef = this.dialog.open(deleteUserDialog, {
        width: '400px',
        data: { res: '' },
      });

      //ダイアログが閉じたときの結果を受け取るサブスクライブ
      dialogRef.afterClosed().subscribe((result) => {
        // resultが空のときundefinedにならないように''を代入
        this.res = result ? result : '';

        // デバッグ用出力
        console.log('ダイアログが閉じました：res=' + this.res);

        // ここでPromiseのresolveを引数を空で実行して返している。
        return resolve();
      });
    });
  }
}

// -----------
// 表示される「deleteUserDialog」ダイアログを定義しているところ
// 普通に別コンポーネントに分けることもできるみたい
// 今回の場合、1ファイルに新しいクラスを追記したので、
// setting.module.tsに手動でインポートをしてあげる必要がある。
// -----------
@Component({
  selector: 'delete-user-dialog',
  templateUrl: 'delete-user-dialog.html',
})
export class deleteUserDialog {
  constructor(
    public dialogRef: MatDialogRef<deleteUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  cancel(): void {
    this.dialogRef.close();
  }
}
