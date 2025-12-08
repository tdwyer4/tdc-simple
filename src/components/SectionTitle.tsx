import styles from "./SectionTitle.module.css";

type SectionTitleText = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleText) => {
  return (
    <div className={styles.titleWrap}>
    {/* <div className={styles.titleBorder}></div> */}
    <div className={styles.title}>{title}</div>
    </div>
  )
}
export default SectionTitle