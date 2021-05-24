import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm () {
  return (
  <Card>
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">タイトル</label>
        <input type="text" required id="title" />
      </div>
      <div className={classes.control}>
        <label htmlFor="image">会場</label>
        <input type="url" required id="image" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">住所</label>
        <input type="text" required id="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">説明</label>
        <textarea id="description" required row="5"></textarea>
      </div>
      <div className={classes.action}>
        <button>会場を追加</button>
      </div>
    </form>
  </Card>
  );
}

export default NewMeetupForm;