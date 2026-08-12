import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/archivo-black'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/600.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/600.css'
import '@fontsource/space-grotesk/700.css'
import './styles.css'

const TOKEN_ADDRESS = import.meta.env.VITE_TOKEN_ADDRESS || '0x25468de8e8a2d3d1abe92888018b8c8868e67777'
const PAIR_ADDRESS = import.meta.env.VITE_PAIR_ADDRESS || '0x2411290C55a293C006703Be92085cc336E22C756'
const BUY_URL = import.meta.env.VITE_BUY_URL || `https://flap.sh/bnb/${TOKEN_ADDRESS}`
const CHART_URL = import.meta.env.VITE_CHART_URL || `https://dexscreener.com/bsc/${PAIR_ADDRESS}`
const X_URL = import.meta.env.VITE_X_URL || 'https://x.com/czcoinbsc'

function Mark({ small = false }: { small?: boolean }) {
  return <span className={`mark ${small ? 'mark--small' : ''}`}><img src="/assets/czcoin-logo.png" alt="" /></span>
}

const Arrow = () => <svg className="button-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6" /></svg>

function ActionLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  if (!href) return <span className={`button button--disabled ${className}`} aria-disabled="true">{children}</span>
  return <a className={`button ${className}`} href={href} target="_blank" rel="noreferrer">{children}</a>
}

const BitcoinLogo = ({ className = '' }: { className?: string }) => <img className={`asset-logo asset-logo--btc ${className}`} src="/Bitcoin.svg" alt="Bitcoin" />
const BnbLogo = ({ className = '' }: { className?: string }) => <img className={`asset-logo asset-logo--bnb ${className}`} src="/bnb.webp" alt="BNB" />
const FlapLogo = ({ className = '' }: { className?: string }) => <img className={`asset-logo asset-logo--flap ${className}`} src="/flap.png" alt="Flap" />

function App() {
  const copyValue = (value: string) => navigator.clipboard.writeText(value)
  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#top"><Mark small /><span>CZCOIN</span></a>
      <nav className="nav-links">
        <a href="#about">About</a><a href="#tokenomics">Tokenomics</a><a href="#roadmap">Roadmap</a><a href="#how-to-buy">How to Buy</a>
      </nav>
      <div className="nav-actions"><a className="x-link" href={X_URL} target="_blank" rel="noreferrer" aria-label="CZCoin on X">X</a><ActionLink className="button--compact" href={BUY_URL}>Buy <Arrow /></ActionLink></div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="ticker"><span className="live-dot" /> LIVE ON BNB CHAIN <b>•</b> CZCOIN / BTCB</div>
        <div className="hero-lockup"><div className="hero-coin"><Mark /><span className="orbit orbit--one"/><span className="orbit orbit--two"/></div><div><p className="eyebrow">THE EXCHANGE ERA CONTINUES</p><h1>CZ<span>COIN</span></h1></div></div>
        <p className="hero-lead">Hold the coin. Earn the cornerstones.</p>
        <p className="hero-copy">A 3% tax on every buy and sell routes value back to holders in <strong>BTC</strong> and <strong>BNB</strong>. Built on BNB Chain for the people who never left the market.</p>
        <div className="hero-actions"><ActionLink href={BUY_URL}>Buy CZCoin <Arrow /></ActionLink><ActionLink className="button--ghost" href={CHART_URL}>View Chart</ActionLink></div>
        <div className="market-strip">
          <div><small>BUY / SELL</small><strong>3% / 3%</strong></div><div><small>TRADING PAIR</small><strong>BTCB</strong></div><div><small>REWARD 01</small><strong>BTC</strong></div><div><small>REWARD 02</small><strong>BNB</strong></div>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div><p className="section-index">01 / THE THESIS</p><h2>BUILT FOR THE<br/><em>BUILDERS.</em></h2></div>
        <div className="manifesto-copy"><p>Crypto moves fast. Conviction compounds.</p><p>CZCoin turns every trade into a recurring reward loop, pairing the scarcity of Bitcoin with the utility of BNB Chain.</p></div>
      </section>

      <section className="principles">
        <article><b>01</b><div className="principle-assets"><div className="icon icon-bitcoin"><BitcoinLogo /></div><span>+</span><div className="icon icon-bnb"><BnbLogo /></div></div><h3>DUAL-ASSET REWARDS</h3><p>Every buy and sell feeds a 3% tax cycle designed to reward eligible CZCoin holders in both BTC and BNB.</p></article>
        <article><b>02</b><div className="icon icon-chain"><FlapLogo /></div><h3>BUILT ON FLAP</h3><p>CZCoin launched through Flap's onchain infrastructure with a BTC trading pair and holder rewards integrated from day one.</p></article>
      </section>

      <section className="tokenomics" id="tokenomics">
        <div className="section-heading"><p className="section-index">02 / THE MACHINE</p><h2>SIMPLE IN.<br/><span>VALUE OUT.</span></h2><p>No complicated tax maze. Every transaction feeds the same two-asset reward thesis.</p></div>
        <div className="tax-layout">
          <div className="tax-ring"><div><small>BUY + SELL</small><strong>3%</strong><span>TAX</span></div></div>
          <div className="allocation">
            <div className="allocation-row"><span>01</span><div><small>HOLDER REWARD</small><strong>BTC</strong></div><BitcoinLogo className="allocation-logo" /></div>
            <div className="allocation-row"><span>02</span><div><small>HOLDER REWARD</small><strong>BNB</strong></div><BnbLogo className="allocation-logo" /></div>
            <div className="pair-row"><small>PRIMARY PAIR</small><strong>CZCOIN / BTCB</strong></div>
          </div>
        </div>
        <div className="contract-details">
          <div className="contract-card"><div><small>OFFICIAL CONTRACT · BNB CHAIN</small><a href={`https://bscscan.com/token/${TOKEN_ADDRESS}`} target="_blank" rel="noreferrer"><code>{TOKEN_ADDRESS}</code></a></div><button onClick={() => copyValue(TOKEN_ADDRESS)}>COPY</button></div>
          <div className="contract-card"><div><small>OFFICIAL PAIR · CZCOIN / BTCB</small><a href={CHART_URL} target="_blank" rel="noreferrer"><code>{PAIR_ADDRESS}</code></a></div><button onClick={() => copyValue(PAIR_ADDRESS)}>COPY</button></div>
        </div>
      </section>

      <section className="roadmap" id="roadmap">
        <div className="section-heading"><p className="section-index">03 / EXECUTION</p><h2>THE ROAD<br/><span>AHEAD.</span></h2></div>
        <div className="roadmap-list">
          <article className="active"><span>PHASE 01</span><h3>DEPLOY</h3><p>Token launch, verified contract, initial liquidity, website and official channels live.</p></article>
          <article><span>PHASE 02</span><h3>DISTRIBUTE</h3><p>BTC and BNB rewards activate, community expansion, tracking tools and listings.</p></article>
          <article><span>PHASE 03</span><h3>EXPAND</h3><p>Strategic integrations, ecosystem partnerships, deeper liquidity and broader access.</p></article>
          <article><span>PHASE 04</span><h3>ENDURE</h3><p>Long-term reward infrastructure, community-led growth and sustainable utility.</p></article>
        </div>
      </section>

      <section className="how" id="how-to-buy">
        <div className="how-title"><p className="section-index">04 / GET STARTED</p><h2>ENTER THE<br/><span>MARKET.</span></h2><ActionLink href={BUY_URL}>Buy CZCoin <Arrow /></ActionLink></div>
        <ol>
          <li><b>01</b><div><h3>CREATE A WALLET</h3><p>Set up MetaMask, Trust Wallet, or another BNB Chain-compatible wallet.</p></div></li>
          <li><b>02</b><div><h3>GET BTC ON BNB CHAIN</h3><p>Fund your wallet with the supported BTC pair asset and keep a small amount of BNB for gas.</p></div></li>
          <li><b>03</b><div><h3>CONNECT + SWAP</h3><p>Open the official trading link, verify the contract, and swap BTC for CZCoin.</p></div></li>
          <li><b>04</b><div><h3>HOLD + EARN</h3><p>Hold CZCoin and receive BTC and BNB rewards according to the distribution system.</p></div></li>
        </ol>
      </section>

      <section className="cta"><Mark /><p>THE NEXT BLOCK IS YOURS.</p><h2>BUILD. HOLD.<br/><span>EARN.</span></h2><a className="button" href={X_URL}>Join the Community <Arrow /></a></section>
    </main>
    <footer><a className="brand" href="#top"><Mark small /><span>CZCOIN</span></a><p>© 2026 CZCoin. Independent community project. Not affiliated with Changpeng Zhao, Binance, or Bitcoin.</p><div><a href={X_URL}>X</a><a href="#tokenomics">Contract</a></div></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
