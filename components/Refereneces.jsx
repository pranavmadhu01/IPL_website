import styles from '../styles/References.module.css'

export default function Refereneces(){
  return(
    <div className={styles.ref_top} id='references'>
      <h1>References</h1>
      <div className={styles.ref_but_top}>
        <div className={styles.ref_but}>
          <span><a target='_blank' href="https://drive.google.com/file/d/1ZpO06iX3nOhLvj9RVL2iG01Vmh19-uPN/view">Download</a></span><span>IPL 2.0 Playbook</span>
        </div>
        <div className={styles.ref_but}>
          <span><a target='_blank' href="https://docs.google.com/spreadsheets/d/1MowE4gqCaPhgfwITz0EomSDk11j6YcuhQxXeZpHHJOo/edit?usp=sharing">Download</a></span><span>Prayatna Points</span>
        </div>
        <div className={styles.ref_but}>
          <span><a target='_blank' href="https://drive.google.com/drive/folders/10rbHW7qSqlKQ65CIPipjEy3F7o1wKdNp?usp=sharing">Download</a></span><span>Logos</span>
        </div>
        <div className={styles.ref_but}>
          <span><a target='_blank' href="https://drive.google.com/file/d/1ey8yQait1tmMmlSGLXdA_U7UJ1hSd94r/view?usp=sharing">Download</a></span><span>Fablab Brochure</span>
        </div>
      </div>
    </div>
  )
}