import React from 'react';
import { Table } from 'reactstrap';

export default class LinksTable extends React.Component {
  render() {
    return (
      <Table className="linksTable table-borderless">
        <thead>
          <tr>
            <th>لینک های مفید</th>
            <th>درباره فروشگاه</th>
            <th>حساب کاربری</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>صفحه اصلی</td>
            <td>درباره ما</td>
            <td>اطلاعات حساب</td>
          </tr>
          <tr>
            <td>فروش ویژه</td>
            <td>پشتیبانی</td>
            <td>سفارشات من</td>
          </tr>
          <tr>
            <td>آخرین محصولات</td>
            <td>تماس با ما</td>
            <td>پیگیری سفارشات</td>
          </tr>
          <tr>
            <td>محصولات پر فروش</td>
            <td>قوانین فروشگاه</td>
            <td>کیف پول</td>
          </tr>
          <tr>
            <td>قوانین سفارش</td>
            <td>سوالات متدوال</td>
            <td>لیست علاقه مندی ها</td>
          </tr>
          <tr>
            <td></td>
            <td>بلاگ</td>
            <td>تیکت های پشتیبانی</td>
          </tr>          
        </tbody>
      </Table>
    );
  }
}