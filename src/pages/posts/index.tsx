import Head from 'next/head';
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | IgNews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>10 de julho de 2022</time>
                        <strong>Titulo Thor sla oq</strong>
                        <p>O thor fez n sei o que e sla o q aaaaaaaa</p>
                    </a>
                    <a href="#">
                        <time>10 de julho de 2022</time>
                        <strong>Titulo Thor sla oq</strong>
                        <p>O thor fez n sei o que e sla o q aaaaaaaa</p>
                    </a>
                </div>
            </main>
        </>
    );
}