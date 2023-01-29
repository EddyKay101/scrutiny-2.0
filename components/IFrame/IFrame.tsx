import styles from './IFrame.module.scss';

type Props = {
  url?
}

export const IFrame = ({ url }: Props) => {
  return (
    <div className={styles.iframes} dangerouslySetInnerHTML={{ __html: url }}></div>
  )
}