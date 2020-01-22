import React from 'react';

import Layout from '../../../../components/Layout';
import BlogHeader from '../../../../components/BlogHeader';

const BlogArticle = () => (
  <Layout fullMenu>
    <article id="main">
      <BlogHeader />
      <section className="wrapper style5">
        <div className="inner">
          <h2>I Submitted My First Talk!</h2>
          <p><em>January 16, 2020</em></p>
          <p>
            I did a scary thing! Like something to be honest was something I would never do.
            I submitted my very first CFP (and now several since). For me, this was both something
            that terrified me as well as a goal for 2020. I never thought I would get to a point where
            I felt "smart enough" to give a talk at a conference. I decided to not let "imposter syndrome"
            rule my life anymore and be confident in the knowledge I've gained through being an everyday 
            programmer.
          </p>

          <h4>Now What?</h4>
          <p>Even though I submitted a talk, it most certainly doesn't guarentee me that I'll be selected
              to give the talk. I plan to continue to submit my talk untill someone picks me! I do not expect
              to be perfect or to give the talk of a seasoned vet, but I do expect to take the first step. You
              see we often compare ourselves to people who have specialized in an area for many many years.
              Ultimately the only thing we can do is to take the step direclty in front of us. So I chose
              to tackle my fears and take that step. Only time will tell how it will pay off, but I look
              forward to hearing back and ultimatley giving my very first "official" talk in 2020.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default BlogArticle;
