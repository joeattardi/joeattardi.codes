import Layout from '../components/Layout';

import styles from './uses.module.css';

export default function UsesPage() {
  return (
    <Layout title="Uses" animate={false}>
      <main className={styles.main}>
        <h1>Uses</h1>
        <p>
          This page lists some of the hardware and software I use in my daily
          work. This page describes my personal hardware and software, but at
          work it's very similar, and I use the same things in a lot of cases.
        </p>

        <h2>Computer &amp; Peripherals</h2>
        <section>
          <picture>
            <source type="image/webp" srcSet="/desk-setup.webp" />
            <img alt="Desk setup" src="/desk-setup.jpg" />
          </picture>

          <p>
            For my main computer, I have a 2019 16-inch MacBook Pro. It's on my
            desk connected to an LG 27UD69-W 27" 4K IPS LED monitor.
          </p>

          <p>
            I'm all in on Apple. I use the Magic Keyboard with Numeric Keypad,
            along with the Magic Trackpad. I haven't touched a mouse in months!
          </p>
        </section>

        <h2>Editor &amp; Terminal</h2>
        <section>
          <p>
            I use <a href="https://code.visualstudio.com">Visual Studio Code</a>{' '}
            for almost all my code editing. Within VS Code, I use the{' '}
            <a href="https://draculatheme.com/visual-studio-code">Dracula</a>{' '}
            theme. My one exception to VS Code is for Java code, for which I use{' '}
            <a href="https://www.jetbrains.com/idea/">IntelliJ IDEA</a>.
          </p>

          <p>
            My preferred coding font is{' '}
            <a href="https://github.com/microsoft/cascadia-code">
              Cascadia Code
            </a>{' '}
            by Microsoft.
          </p>

          <p>
            For my terminal, I use <a href="https://www.iterm2.com/">iTerm 2</a>
            .
          </p>
        </section>
      </main>
    </Layout>
  );
}
