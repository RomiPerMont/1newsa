// src/pages/Edit.jsx 
import React from 'react';
import './Edit.css'; // 

const editorials = [
  {
    title: "Climate Change Action Can't Wait For Perfect Solutions",
    author: ": Nils Rokke",
    summary: "The climate crisis is no longer a future concern; it is a present-day emergency. Multiple reports from leading global bodies such as the IPCC, the World Meteorological Organization, the Copernicus Observatory, NOAA and others consistently warn that we must use every tool at our disposal to combat it. The IEA and IRENA are among those suggesting solutions using the technologies we have and must develop by providing roadmaps to net zero by 2050, in general there is a plethora of such roadmaps and outlooks. This isn’t bad, of course, but the path forward is far more complicated than identifying solutions. It's about ensuring those solutions are genuinely effective and deployed to reduce or remove emissions. The complication lies in the fact that the available technologies are often immature and reliant on emerging markets. This creates a significant gap between the solutions we need and their real-world application. However, even if the perfect solutions are not there yet, inaction is not the answer.",
    image: "/Climate-Change.jpg"
  },
  {
    title: "Education Reform for the Digital Era",
    author: ": Chester E. Finn Jr.",
    summary: "Digital learning is more than the latest addition to education reformers’ to-do-lists, filed along with teacher evaluations, charter schools, tenure reform, academic standards, and the like. It’s fundamentally different: For digital learning to fulfil its enormous potential, a wholesale reshaping of the reform agenda itself is required, particularly in the realms of school finance and governance. But just as online education needs those reforms if it is to flourish, so does deep education reform need digital learning, which can provide valuable solutions to some of education’s greatest challenges—beginning with the basic obsolescence of its familiar delivery system. That system has not been dramatically altered for at least a century. Despite reformers’ earnest struggles to modify and smooth its course, the obvious disrepair of the present arrangement, and the enormous resources applied to its renovation, our schools and teachers still follow an old, meandering, cobblestone pathway rather than a fast, modern superhighway.",
    image: "/Education-Reform.jpg"
  },
  {
    title: "How We Know Journalism is Good for Democracy",
    author: ": Josh Stearns",
    summary: "At Democracy Fund, we see every day how local news strengthens democracy. People rely on local news to figure out who to vote for, how to speak up at school board meetings, how to run for local office, where to find vaccines, when to organize for change, and more. From daily reporting that equips people to act, to huge investigations that reveal corruption, the health of local news is bound up with the health of our democracy. Unfortunately, communities across the United States are steadily losing access to this kind of civic information. According to data released in June 2022, at least one fifth of the U.S. — 70 million people — live in a community without a newspaper or a community at risk of losing theirs. Since 2018, we’ve been tracking academic studies that show in stark terms the impact journalism has on our democracy. This research review has become a critical guide for funders, policymakers, communities, and journalists who care about creating a healthier democracy.",
    image: "/Democracy.jpg"
  },
  {
    title: "The Future of Work After COVID-19",
    author: ": Susan Lund",
    summary: "The COVID-19 pandemic disrupted labour markets globally during 2020. The short-term consequences were sudden and often severe: Millions of people were furloughed or lost jobs, and others rapidly adjusted to working from home as offices closed. Many other workers were deemed essential and continued to work in hospitals and grocery stores, on garbage trucks and in warehouses, yet under new protocols to reduce the spread of the novel coronavirus. This report on the future of work after COVID-19 is the first of three MGI reports that examine aspects of the post pandemic economy. The others look at the pandemic’s long-term influence on consumption and the potential for a broad recovery led by enhanced productivity and innovation. Here, we assess the lasting impact of the pandemic on labour demand, the mix of occupations, and the workforce skills required in eight countries with diverse economic and labour market models: China, France, Germany, India, Japan, Spain, the United Kingdom, and the United States. Together, these eight countries account for almost half the global population and 62 percent of GDP.",
    image: "/FutureWork.jpg"
  },
  {
    title: "Mental Health Matters More Than Ever",
    author: ": Chelsea Sarai",
    summary: "As we step into 2024, the global awareness of mental health issues has reached an unprecedented level. The last few years have underscored the fragility of mental well-being, influenced significantly by a series of global events—from pandemics to economic downturns and social unrest. These challenges have not only highlighted but also intensified the myriad pressures on our mental health, making it a subject of universal concern. This blog aims to delve into why mental health has become a paramount issue in 2024, exploring the changing landscape, the role of technology, and the collective steps we can take to address this pressing concern. The perception of mental health has undergone a significant transformation over the years. Historically, mental health issues were often stigmatized, misunderstood, and overlooked. However, recent decades have seen a shift towards greater understanding, acceptance, and prioritization of mental health. This evolution is a testament to the efforts of advocacy groups, healthcare professionals, and individuals sharing their experiences, all contributing to a more informed and empathetic society.",
    image: "/MentalHealth.jpg"
  },
  {
    title: "Why Local News Still Matters Nationally",
    author: ": Rebecca Warber",
    summary: "During just my second ENGLISH 322: Community Journalism class at the University of Michigan, my professor wrote the following phrase on the blackboard: All news is local. He then turned to the woefully small class and asked if anyone could explain what the phrase meant. A few students raised their hands to respond, and after calling on each one, my professor launched into his own explanation, telling us that the phrase is meant to express the importance of localizing news and issues — of making them meaningful to smaller, specific readerships. As it turns out, this phrase is not only helpful advice for aspiring journalists but also an important reminder for the public as we face a new epidemic: the disappearance of local news outlets. American journalism has been suffering since the early 2000s. A report from Northwestern University’s Medill School of Journalism found that the country has lost one-third of its newspapers (nearly 3,000) and two-thirds of its newspaper journalists since 2004. And, unfortunately, recent research indicates the industry is not catching a break any time soon.",
    image: "/LocalNews.jpg"
  },
  {
    title: "Two Paths of Balancing Technology and Ethics",
    author: ": Viktor Tuzov",
    summary: "Artificial intelligence is rapidly becoming a transformative technology on the agenda of global competition. Although it provides ground-breaking opportunities to benefit societies, the technology also evokes tremendous concerns about potential risk and harm. Mitigating such risks and turning technology into a responsible asset for humanity have been essential agendas in the emerging global architecture of AI governance. Thus, this study proposes an integrated CAMS framework of AI governance to examine the content, actors, means, and scope of AI technology regulations in China and Germany. Regarding AI governance as an active negotiation and regulatory trajectory, we investigate laws and policies on AI governance and the policy-making processes in both countries and articulate two paths of balancing technology and ethics. China adopts a utility-oriented approach featuring a state-led governance structure with complex central-local dynamics. In the Chinese model, AI technology is a driver of economic development, and ethics serves as a utilitarian tool to safeguard the advancement of technology. Germany constructs a right-based approach governed by multisectoral discussion and cooperation platforms with state supervision.",
    image: "/EthicsAI.jpg"
  },
  {
    title: "Gen Z: How Young People Are Changing Activism",
    author: " : Megan Carnegie",
    summary: "Technology has given young people a louder voice than ever before. Gen Z are angry – and unafraid to speak up. Elijah McKenzie-Jackson was raised as a vegetarian on animal-welfare grounds. But at 10, he began to do more research and discovered the climate impact and greenhouse gas emissions associated with rearing livestock and making animal products. “At 14, I transitioned to veganism, which helped me understand why it can’t just be personal change when fighting the climate crisis,” he says. He knew cutting out meat and animal products wasn’t enough on its own, so at 15, McKenzie-Jackson amped up his activism efforts. He joined XR Youth, the UK-based independent wing of Extinction Rebellion, and since 2019, has been organising and participating in climate strikes with the UK Student Climate Network and the international movement Fridays for the Future. Now 18, McKenzie-Jackson has taken a one-year sabbatical from his schooling, after which he’ll move to New York City to study sociology and fine art. McKenzie-Jackson’s experience of starting a life in activism at a young age – and going all in – is an increasingly common story among Gen Zers.",
    image: "/GenZ.jpg"
  }
];

function Edit() {
  return (
    <div className="editorial-page">
      <h1 className="editorial-heading">Editorial Page</h1>
        <h2 className="editorial-subheading">
        A space for bold opinions, critical reflections, and informed perspectives. Here, our writers explore the stories behind the headlines, offering thought-provoking takes on politics, culture, the environment, and more. Join the conversation that shapes tomorrow.
      </h2>
      <div className="editorial-grid">
        {editorials.map((article, index) => (
          <div key={index} className="editorial-card">
            <img src={article.image} alt={article.title} className="editorial-image" />
            <h2 className="editorial-title">{article.title}</h2>
            <p className="editorial-author">By {article.author}</p>
            <p className="editorial-summary">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Edit;

