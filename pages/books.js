import Layout from '../components/Layout';

import styles from './books.module.css';

export default function BooksPage() {
  return (
    <Layout title="Books" animate={false}>
      <main className={styles.main}>
        <h1>Books by Joe Attardi</h1>

        <h2>Modern CSS (Apress)</h2>
        <section className={styles.book}>
          <div>
            <picture>
              <source type="image/webp" srcSet="/modern-css.webp" />
              <img alt="Modern CSS cover" src="/modern-css.jpg" />
            </picture>
            <a
              className="call-to-action"
              href="https://www.amazon.com/Modern-CSS-Master-Concepts-Development/dp/148426293X"
            >
              Buy from Amazon
            </a>
            <a
              className="call-to-action"
              href="https://www.apress.com/us/book/9781484262931"
            >
              Buy from Apress
            </a>
          </div>
          <p>
            Come on a tour of “modern” CSS in 2020. This example-driven book
            demonstrates the concepts by showing code examples, screenshots, and
            diagrams to help clearly communicate the information. You'll start
            with the very basics of CSS: box model, colors, selectors and
            combinators, and specificity. Then gradually move through more
            intermediate topics - styling text, positioning, Z-index and
            stacking contexts, gradients, borders, and then to more advanced
            topics such as transforms, transitions, animations, flexbox, and CSS
            grid. Some features are only available in modern browsers (Chrome,
            Edge, Safari, and Firefox), but information about IE11 compatibility
            is included where possible. There is a lot of discussion about how
            hard CSS is, and how intimidated some people are by it, but it
            doesn’t have to be this way. Modern CSS uses a logical and
            understandable approach to break down and clearly explain the ins
            and outs of CSS.
          </p>
        </section>

        <h2>Using Gatsby and Netlify CMS (Apress)</h2>
        <section className={styles.book}>
          <div>
            <picture>
              <source
                type="image/webp"
                srcSet="/using-gatsby-and-netlify-cms.webp"
              />
              <img
                alt="Modern CSS cover"
                src="/using-gatsby-and-netlify-cms.jpg"
              />
            </picture>
            <a
              className="call-to-action"
              href="https://www.amazon.com/Using-Gatsby-Netlify-CMS-JAMstack/dp/1484262964"
            >
              Buy from Amazon
            </a>
            <a
              className="call-to-action"
              href="https://www.apress.com/us/book/9781484262962"
            >
              Buy from Apress
            </a>
          </div>
          <p>
            Leverage the powerful new combination of Gatsby and Netlify CMS, a
            free open source content management solution, to build blazing fast
            apps. This book shows you how to create a React-powered website
            using the Gatsby framework for the frontend, and Netlify CMS as the
            content backend. Through the course of the book you'll gradually
            build a website for a coffee shop that includes a blog and a
            bakery/coffee menu that is customizable through Netlify CMS. The
            project starts with a bare-bones Gatsby site to which you'll add
            functionality such as setting up/configuring the CMS, creating
            different types of content, and writing some Gatsby glue code to
            consume the Markdown data via plugins. When done, you'll be
            well-equipped to build on your existing JavaScript and React
            knowledge to effectively use Gatsby and Netlify CMS for yourself or
            your clients. Using Gatsby and Netlify CMS is an ideal guide for
            anyone looking to build their own sites and manage their own content
            without having to deal with creating Markdown files or Git
            repositories.
          </p>
        </section>
      </main>
    </Layout>
  );
}
