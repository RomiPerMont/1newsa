import React from 'react';
import './TopStories.css'; // Optional, for styling if needed

function TopStories() {
  return (
    <div className="top-stories-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <img
        src="/trump.jpg"
        alt="Donald Trump"
        style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
      />

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        Meet the Republicans regretting they ever supported Donald Trump
      </h1>
      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        By Logan Church, 1News US Correspondent – Sat, May 17
      </p>

      <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
        <p>Donald Trump has been competing with himself for the title of the president with the lowest approval numbers, in the wake of tariff chaos, and the apparent 180 degree turn on America’s support of Ukraine to defend itself against Russia’s invasion. Logan Church meets Republicans regretting their vote.</p>

        <p>I’ve been speaking with Republicans throughout America who told me they were shocked at the direction their country was going in.</p>

        <p>One of them was Michael Pritsker, a Ukrainian American who I met – alongside his brother Alex – at his home in central New Jersey.</p>

        <p>He's such a Republican that his home office is adorned with pictures of Ronald Reagan on almost every available surface.</p>

        <p>Michael voted for Trump, in part based on his promise that he would end the war in Ukraine.</p>

        <p>"I'm not saying that there haven't been positives in some of the policy positions he has – and we share them...but specifically on the world stage and as it applies on the war in Ukraine, I think Mr Trump's approach has been a complete failure. Russia did not stop its assault in Ukraine. Ukraine doesn’t have enough weapons...Ukraine needs that to sustain their ability to defend themselves," Michael told me.</p>

        <p>"I see that my hope — or my belief — in what he would do is erroneous, because clearly Donald Trump hasn't done anything to address the issues fairly or successfully or help Ukraine to be on the winning side of the war."</p>

        <p>Alex – also a Republican – broke with his brother and didn’t vote for Trump in the 2024 election. He was particularly concerned about Trump’s intent to come to a deal with Russia – apparently at any cost.</p>

        <p>Both brothers were furious at Ukraine president Volodymyr Zelensky's treatment when he visited the White House last year, to only be publicly dressed down by Trump and Vice President JD Vance.</p>

        <p>"When you have an idea that you are going to achieve a deal – no matter how bad or shaky or unfair it is...who are you going to squeeze? Ukraine is the weaker partner in this conversation," Alex said.</p>

        <p>"It is maybe alright for the mega deals in New York real estate, but when you are dealing with human life and the disaster that’s happening in Ukraine, it is extremely unfair."</p>

        <p>America is filled with households like this. In my travels across many of the 50 states, I’ve met Republican families where some are much more on board with the direction of the Republican party than others.</p>

        <p>Former Wisconsin congressman, Steve Gunderson, is not one of them.</p>

        <p>"The reality is, I grew up on the idea that [the Republicans] were about strong national defence, strong global leadership, belief in alliances, the free market, global trade — and, all of a sudden, we have a Republican party that is increasingly isolationist,” he told me on a zoom call from Washington DC.</p>

        <p>Other than the crisis in Ukraine, Gunderson was concerned about Trump’s trade polices, and the tariffs he’s imposed on America’s allies.</p>

        <p>"I give [Trump’s team] credit – they came up with a cool term, a term that resonates with the average American, so they were able to spin the tariffs in a sense that it would give you freedom, but it doesn’t give you freedom it gives you the opposite," he said.</p>

        <p>"It moves you out of the global economy and into your own and the dynamics of us trying to recreate economically; of us trying to recreate all that manufacturing from low-cost items to high-cost [items]...it’s not who America has been and it’s not something that can be done quickly."</p>

        <p>Gunderson, who considers himself far closer to the political middle than many in the current Republican party, was also worried about America’s reputation on the world stage.</p>

        <p>"One of the reporters for The Economist made an incredible statement – he said America has always been seen as a leader with great values, with great ideals and relationships. It was an ideal. Under Trump, he said, we don't see America as that, we see it as a place,” said Gunderson.</p>

        <p>"I think that is really unfortunate."</p>

        <p>It’s important to note that, despite the widespread opposition to Trump’s agenda inside America, there are millions of people who believe he is the man to lead America back to greatness.</p>

        <p>"[Trump] knows what he's doing, and Trump is trying to repair the relations that the Biden administration destroyed," said John Parker of Connecticut, speaking to Reuters outside Donald Trump's Florida home Mar-a-Lago.</p>

        <p>"Trump's been trying to do everything to make the country as great as he can, and I'm fully on board with that," said Steven Drew of North Carolina.</p>
      </div>
    </div>
  );
}

export default TopStories;
