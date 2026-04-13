import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import './App.css'

// Shared Components
function StatusBar() {
  return (
    <div className="status-bar">
      <span>15:24</span>
      <div className="status-bar-right">
        <span>●●●●</span>
        <span>📶</span>
        <span>🔋</span>
      </div>
    </div>
  )
}

function NavHeader({ title, onBack, rightAction }) {
  return (
    <div className="nav-header">
      {onBack && (
        <button className="back-btn" onClick={onBack}>‹</button>
      )}
      <h1>{title}</h1>
      {rightAction}
    </div>
  )
}

function CampaignHeaderCard() {
  return (
    <div className="campaign-header">
      <div className="brand-logo">
        <PikoraLogo />
      </div>
      <div className="campaign-info">
        <h2>Pikora Instant Bone Broth Colle...</h2>
        <div className="brand-name">by Pikora</div>
      </div>
    </div>
  )
}

function PikoraLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <text x="5" y="18" fontSize="9" fontWeight="800" fill="#E74C3C" fontFamily="sans-serif">PiK</text>
      <text x="5" y="32" fontSize="11" fontWeight="800" fill="#E74C3C" fontFamily="sans-serif">ORA</text>
    </svg>
  )
}

function StepProgress({ currentStep }) {
  const steps = ['Product', 'Delivery', 'Content', 'Publish']
  return (
    <div className="step-progress">
      {steps.map((label, i) => {
        const stepNum = i + 1
        const isCompleted = stepNum < currentStep
        const isActive = stepNum === currentStep
        return (
          <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className="step-item">
              <div className={`step-circle ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}>
                {isCompleted ? '✓' : stepNum}
              </div>
              <span className={`step-label ${isActive ? 'active' : ''}`}>{label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`step-line ${isCompleted ? 'completed' : ''}`} />
            )}
          </div>
        )
      })}
    </div>
  )
}

// ==================== PAGES ====================

// 1. Discover & Invitation
function DiscoverPage() {
  const nav = useNavigate()
  const brands = ['Nike', 'REVOLVE', 'Supergoop!', 'Vrbo', 'eBay', 'Bondi Sands', 'SKIMS', 'lululemon', 'ASOS', 'TJ Maxx', 'ULTA', 'Glow Recipe']
  return (
    <div className="page">
      <NavHeader title="Discover" rightAction={<button className="search-btn">🔍</button>} />
      <div className="discover-tabs">
        {['Trending', 'Fashion', 'Beauty', 'Food'].map((tab, i) => (
          <button key={tab} className={`tab ${i === 0 ? 'active' : ''}`}>{tab}</button>
        ))}
      </div>
      <div className="brand-grid-wrapper">
        <div className="brand-grid">
          {brands.map(brand => (
            <div key={brand} className="brand-item">{brand}</div>
          ))}
        </div>
      </div>
      <div className="gradient-divider" />
      <div className="invite-section">
        <div className="invite-avatar">JB</div>
        <div className="invite-name">JULIA BRANDY2</div>
        <h2>YOU'VE BEEN INVITED</h2>
        <p className="invite-desc">Join our invite-only creator program and get access to brand collabs!</p>
        <div className="invite-features">
          <div className="feature">
            <span className="feature-icon">💎</span>
            <span>Get matched with awesome brands</span>
          </div>
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>Pick your fav products</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Post and keep getting matched with more brands!</span>
          </div>
        </div>
        <button className="btn-primary" onClick={() => nav('/onboarding')}>Get Started!</button>
      </div>
    </div>
  )
}

// 2. Onboarding - Personal Details
function OnboardingPage() {
  const nav = useNavigate()
  const [filled, setFilled] = useState(false)
  const [phone, setPhone] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <div className="page">
      <NavHeader title="Brand Collabs" onBack={() => nav('/')} />
      <div className="form-section">
        <h2>Personal details</h2>
        <div className="form-group">
          <label>Profile Name</label>
          <input type="text" defaultValue="Julia Brandy7" onFocus={() => setFilled(true)} />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>Full Legal Name</label>
          <input type="text" defaultValue="Julia Brandy7" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" defaultValue="julia+BrandTest7@benable.com" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>

        <p style={{ fontSize: 13, color: 'var(--gray-700)', marginBottom: 10, marginTop: 8 }}>Phone number</p>
        <div className="phone-row">
          <div className="country-code">🇺🇸 +1 ▾</div>
          <input
            type="tel"
            placeholder=""
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
        </div>

        <div className="consent-row">
          <div className={`checkbox ${checked ? 'checked' : ''}`} onClick={() => setChecked(!checked)}>
            {checked && '✓'}
          </div>
          <p>
            By checking this box, I agree to receive text messages from Benable at the phone number provided. Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe at any time. Reply HELP for help. By opting in, I agree to the <a href="#">terms of service</a> and <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>

      <div className="bottom-fixed">
        <button
          className={`btn-primary ${!phone || !checked ? 'disabled' : ''}`}
          onClick={() => nav('/onboarding/shipping')}
        >
          Next
        </button>
      </div>
    </div>
  )
}

// 2b. Onboarding - Shipping Address
function ShippingAddressPage() {
  const nav = useNavigate()
  return (
    <div className="page">
      <NavHeader title="Brand Collabs" onBack={() => nav('/onboarding')} />
      <div className="form-section">
        <h2>Shipping Address</h2>
        <div className="form-group">
          <label>Street Address</label>
          <input type="text" defaultValue="1125 Mason Street" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>Apt / Suite</label>
          <input type="text" defaultValue="Apt 8" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" defaultValue="San Francisco" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>State</label>
          <input type="text" defaultValue="California" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>Zip Code</label>
          <input type="text" defaultValue="94108" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" defaultValue="US" />
          <span className="check-icon"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="10" stroke="#2ECC71" strokeWidth="1.5" fill="none"/><path d="M6.5 11.5L9.5 14.5L15.5 8.5" stroke="#2ECC71" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
      </div>
      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/campaigns')}>Next</button>
      </div>
    </div>
  )
}

// 3. Campaigns List
function CampaignsListPage() {
  const nav = useNavigate()
  const [activeTab, setActiveTab] = useState('New')
  const tabs = ['New', 'Active', 'Finished']

  return (
    <div className="page">
      <NavHeader title="Campaigns" onBack={() => nav('/')} />
      <div className="campaign-tabs">
        {tabs.map(tab => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'New' && (
        <div className="campaign-card">
          <div className="card-brand">
            <div className="card-brand-logo"><PikoraLogo /></div>
            <div className="card-brand-name">Pikora</div>
          </div>
          <div className="card-inner">
            <h3>Pikora Instant Bone Broth Collection</h3>
            <p>Hi, I'm Ana, founder of Pikora. We make instant bone broth blends inspired by simmered Latin flavors, with protein-rich...</p>
            <div className="founder-row">
              <div className="founder-avatar" style={{ background: '#8B7355' }} />
              <div className="founder-info">
                <div className="founder-name">Ana</div>
                <div className="founder-role">Founder</div>
              </div>
            </div>
          </div>
          <button className="view-details-btn" onClick={() => nav('/campaign-details')}>View Details</button>
        </div>
      )}

      {activeTab === 'Active' && (
        <div className="empty-tab">No active campaigns yet</div>
      )}
      {activeTab === 'Finished' && (
        <div className="empty-tab">No finished campaigns yet</div>
      )}
    </div>
  )
}

// 4. Campaign Details (scrollable)
function CampaignDetailsPage() {
  const nav = useNavigate()
  return (
    <div className="page">
      <NavHeader title="Campaigns" onBack={() => nav('/campaigns')} />
      <CampaignHeaderCard />

      <div className="page-content">
        {/* About the Brand */}
        <div className="content-card">
          <div className="card-title"><span className="emoji">🔗</span> About the Brand</div>
          <div className="card-subtitle">Who are we</div>
          <p>Pikora makes instant bone broth blends inspired by simmered Latin flavors, with protein-rich staples designed to support everyday wellness, cooking, and convenient nourishment.</p>
          <div className="social-links">
            <span>🌐 Website</span>
            <span>📷 Instagram</span>
            <span>🎵 TikTok</span>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="founder-quote">
          "Hi! I'm Ana, founder of Pikora. We make instant bone broth blends inspired by simmered Latin flavors, with protein-rich staples designed to support everyday wellness, cooking, and convenient nourishment. Thanks for taking a look at Pikora. It means a lot to have creators tell the story in a way that feels real to them."
          <div className="founder-card">
            <div className="avatar" style={{ background: '#8B7355' }} />
            <div>
              <div className="name">Ana</div>
              <div className="role">Founder</div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="content-card">
          <div className="card-title"><span className="emoji">🎁</span> What You Get</div>
          <p style={{ marginBottom: 16 }}>You get to choose one of the following products!</p>
          <div className="product-card-img">
            <span style={{ opacity: 0.8 }}>Pikora — Instant Cocoa Bone Broth</span>
          </div>
          <div className="product-price">USD 45.00</div>
          <div className="product-name">Big Dulce</div>
          <div className="product-link">🔗 holapikora.com/products/big-dulce ↗</div>
        </div>

        {/* Campaign Brief */}
        <div className="content-card brief-section">
          <div className="card-title"><span className="emoji">📋</span> Campaign Brief</div>
          <h4>POST</h4>
          <ul>
            <li>1 post on your primary platform (TikTok or Instagram)</li>
            <li>Posted from your own account.</li>
          </ul>
          <h4>CONTENT IDEAS</h4>
          <ul>
            <li>Show how the product fits naturally into your routine, meal, or day.</li>
            <li>Capture an honest first impression, taste-test, or reaction moment.</li>
            <li>Create a short creator-native moment that makes sense for your audience.</li>
          </ul>
          <h4>TALKING POINT SUGGESTIONS</h4>
          <ul>
            <li>What stood out when you first tried the product.</li>
            <li>How the product fits naturally into your routine.</li>
            <li>What you would tell a friend before they try it themselves.</li>
          </ul>
        </div>

        {/* Warning */}
        <div className="warning-banner orange">
          Do not publish — content must be approved first.
        </div>

        {/* Brand Guidelines */}
        <div className="content-card">
          <div className="card-title"><span className="emoji">📝</span> Brand Guidelines</div>
          <div className="guidelines-do">
            <h4>DOs</h4>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Show the product clearly in use.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Keep the content creator-native and easy to follow.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Share an honest experience in your own voice.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Include required disclosures.</div>
          </div>
          <div className="guidelines-dont">
            <h4>DON'Ts</h4>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not make claims you cannot personally support.</div>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not include competitor products in the same post.</div>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not publish off-brief or misleading content.</div>
          </div>
        </div>

        {/* Usage and Rights */}
        <div className="rights-card">
          <h3><span>📄</span> Usage and Rights</h3>
          <ul>
            <li>Brand receives 90 days of organic usage rights for all creator content.</li>
          </ul>
        </div>
      </div>

      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/step1-product')}>Accept & Commit</button>
        <button className="btn-secondary" onClick={() => nav('/campaigns')}>Not This Time</button>
      </div>
    </div>
  )
}

// 5. Step 1 - Product Selection
function Step1ProductPage() {
  const nav = useNavigate()
  const [selected, setSelected] = useState(true)

  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/campaign-details')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={1} />

      <div className="page-content">
        <div className="shipping-card">
          <div className="shipping-header">
            <h3>📍 Shipping Address</h3>
            <button className="edit-btn">Edit</button>
          </div>
          <div className="address-box">
            <div className="address-name">Julia Brandy2</div>
            <div>1125 Mason Street, Apt 8</div>
            <div>San Francisco, California 94108</div>
            <div>US</div>
          </div>
        </div>

        <div className="product-selector">
          <h3><span>🎁</span> Choose Your Products</h3>
          <p className="selector-desc">Select up to 2 products to feature in your content.</p>
          <div
            className="product-thumb"
            onClick={() => setSelected(!selected)}
            style={{ cursor: 'pointer' }}
          >
            <span style={{ opacity: 0.8 }}>Pikora — Instant Cocoa Bone Broth</span>
            {selected && <div className="check-badge">✓</div>}
          </div>
        </div>
      </div>

      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/step2-delivery')}>Place Order</button>
      </div>
    </div>
  )
}

// 6. Step 2 - Delivery
function Step2DeliveryPage() {
  const nav = useNavigate()
  const [canConfirm, setCanConfirm] = useState(false)

  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/step1-product')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={2} />

      <div className="delivery-status">
        <div className="delivery-icon">🚚</div>
        <h2>Product is on its way</h2>
        <p>Your order has been placed. We'll update this page when tracking info is available.</p>
      </div>

      <div className="bottom-fixed">
        <button
          className={`btn-primary ${!canConfirm ? 'disabled' : ''}`}
          onClick={() => {
            if (canConfirm) nav('/step3-content')
          }}
          onDoubleClick={() => {
            setCanConfirm(true)
          }}
        >
          I have the product
        </button>
        <p style={{ textAlign: 'center', fontSize: 11, color: 'var(--gray-400)', marginTop: 8 }}>
          Double-tap button to simulate receiving product
        </p>
      </div>
    </div>
  )
}

// 7. Step 3 - Content
function Step3ContentPage() {
  const nav = useNavigate()
  const [caption, setCaption] = useState('')
  const [uploaded, setUploaded] = useState(false)

  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/step2-delivery')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={3} />

      <div className="page-content">
        {/* About the Brand */}
        <div className="content-card">
          <div className="card-title"><span className="emoji">🔗</span> About the Brand</div>
          <div className="card-subtitle">Who are we</div>
          <p>Pikora makes instant bone broth blends inspired by simmered Latin flavors, with protein-rich staples designed to support everyday wellness, cooking, and convenient nourishment.</p>
          <div className="social-links">
            <span>🌐 Website</span>
            <span>📷 Instagram</span>
            <span>🎵 TikTok</span>
          </div>
        </div>

        {/* Founder Quote */}
        <div className="founder-quote">
          "Hi! I'm Ana, founder of Pikora. We make instant bone broth blends inspired by simmered Latin flavors, with protein-rich staples designed to support everyday wellness, cooking, and convenient nourishment. Thanks for taking a look at Pikora. It means a lot to have creators tell the story in a way that feels real to them."
          <div className="founder-card">
            <div className="avatar" style={{ background: '#8B7355' }} />
            <div>
              <div className="name">Ana</div>
              <div className="role">Founder</div>
            </div>
          </div>
        </div>

        {/* Campaign Brief */}
        <div className="content-card brief-section">
          <div className="card-title"><span className="emoji">📋</span> Campaign Brief</div>
          <h4>POST</h4>
          <ul>
            <li>1 post on your primary platform (TikTok or Instagram)</li>
            <li>Posted from your own account.</li>
          </ul>
          <h4>CONTENT IDEAS</h4>
          <ul>
            <li>Show how the product fits naturally into your routine, meal, or day.</li>
            <li>Capture an honest first impression, taste-test, or reaction moment.</li>
            <li>Create a short creator-native moment that makes sense for your audience.</li>
          </ul>
          <h4>TALKING POINT SUGGESTIONS</h4>
          <ul>
            <li>What stood out when you first tried the product.</li>
            <li>How the product fits naturally into your routine.</li>
            <li>What you would tell a friend before they try it themselves.</li>
          </ul>
        </div>

        <div className="warning-banner orange">
          Do not publish — content must be approved first.
        </div>

        {/* Brand Guidelines */}
        <div className="content-card">
          <div className="card-title"><span className="emoji">📝</span> Brand Guidelines</div>
          <div className="guidelines-do">
            <h4>DOs</h4>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Show the product clearly in use.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Keep the content creator-native and easy to follow.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Share an honest experience in your own voice.</div>
            <div className="guideline-item"><span className="guideline-icon">✅</span> Include required disclosures.</div>
          </div>
          <div className="guidelines-dont">
            <h4>DON'Ts</h4>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not make claims you cannot personally support.</div>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not include competitor products in the same post.</div>
            <div className="guideline-item"><span className="guideline-icon">❌</span> Do not publish off-brief or misleading content.</div>
          </div>
        </div>

        {/* Usage and Rights */}
        <div className="rights-card">
          <h3><span>📄</span> Usage and Rights</h3>
          <ul>
            <li>Brand receives 90 days of organic usage rights for all creator content.</li>
          </ul>
        </div>

        {/* Upload Section */}
        <h3 style={{ padding: '16px 20px 0', fontWeight: 700 }}>Post</h3>
        <div className="upload-area" onClick={() => setUploaded(!uploaded)}>
          {uploaded ? (
            <div style={{ color: 'var(--green)' }}>
              <div className="upload-icon">✅</div>
              <p>Media uploaded! Tap to remove.</p>
            </div>
          ) : (
            <>
              <div className="upload-icon">☁️</div>
              <p>Upload Video / Images</p>
            </>
          )}
        </div>

        {/* Hashtags */}
        <div className="hashtag-section">
          <p>Depending on your platform, make sure to include the following:</p>
          <div className="hashtag-item">
            <span>#pikora</span>
            <button className="copy-btn">📋</button>
          </div>
          <div className="hashtag-item">
            <span>@holapikora</span>
            <button className="copy-btn">📋</button>
          </div>
        </div>

        {/* Caption */}
        <div className="caption-area">
          <textarea
            placeholder="Write your caption..."
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
        </div>

        <button className="add-deliverable-btn">+ Add Another Deliverable</button>
      </div>

      <div className="bottom-fixed">
        <button
          className={`btn-primary ${!uploaded ? 'disabled' : ''}`}
          onClick={() => nav('/waiting-review')}
        >
          Submit for Review
        </button>
      </div>
    </div>
  )
}

// 8. Waiting for Review
function WaitingReviewPage() {
  const nav = useNavigate()
  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/step3-content')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={3} />

      <div className="waiting-section">
        <div className="waiting-icon">🕐</div>
        <h2>Waiting for Review</h2>
        <p>Your content has been submitted and is being reviewed. This usually takes 1-3 business days. We'll email you when it's ready.</p>
      </div>

      <div className="warning-banner">
        Do not publish your content yet — wait for feedback! We'll send you an email.
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ textAlign: 'center', padding: '20px', color: 'var(--gray-500)', fontSize: 13 }}>
        Questions? Email collabs@benable.com
      </div>

      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/changes-requested')} style={{ background: 'var(--gray-400)' }}>
          Continue (simulate review done)
        </button>
      </div>
    </div>
  )
}

// 9. Changes Requested
function ChangesRequestedPage() {
  const nav = useNavigate()
  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/waiting-review')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={3} />

      <div className="changes-section">
        <div className="changes-icon">✏️</div>
        <h2>Changes Requested</h2>
      </div>

      <div className="feedback-card">
        <div className="feedback-thumbs">
          <div className="feedback-thumb" style={{ background: '#1a1a1a' }} />
          <div className="feedback-thumb" style={{ background: '#2a2a2a' }} />
        </div>
        <p>
          "Hey!<br />
          Thank you so much for the great content! Here are a few things to change to be ready to post:<br /><br />
          Make sure to include the @Pikora<br />
          Make sure to include the link in your bio<br /><br />
          Once you've made the changes, you're all set!"
        </p>
      </div>

      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/step4-publish')}>I've made changes</button>
      </div>
    </div>
  )
}

// 10. Step 4 - Publish
function Step4PublishPage() {
  const nav = useNavigate()
  const [links, setLinks] = useState([''])
  const hasLinks = links.some(l => l.trim().length > 0)

  const addLink = () => setLinks([...links, ''])
  const updateLink = (i, val) => {
    const newLinks = [...links]
    newLinks[i] = val
    setLinks(newLinks)
  }
  const removeLink = (i) => {
    if (links.length > 1) setLinks(links.filter((_, idx) => idx !== i))
  }

  return (
    <div className="page">
      <NavHeader title="Campaign" onBack={() => nav('/changes-requested')} />
      <CampaignHeaderCard />
      <StepProgress currentStep={4} />

      <div className="page-content">
        <div className="publish-info">
          <h3><span className="rocket-icon">🚀</span> Time to post!</h3>
          <p>Your content has been approved by Pikora. Post it now and paste your live links below.</p>
        </div>

        <div className="links-section">
          <h3>Your Live Links</h3>
          <p className="links-desc">Paste the public link for each piece of published content. At least one link is required.</p>

          {links.map((link, i) => (
            <div key={i} className="link-input-row">
              <input
                type="url"
                placeholder="Paste your live link..."
                value={link}
                onChange={e => updateLink(i, e.target.value)}
              />
              {links.length > 1 && (
                <button className="delete-btn" onClick={() => removeLink(i)}>🗑️</button>
              )}
            </div>
          ))}

          <button className="add-link-btn" onClick={addLink}>+ Add Another Link</button>
        </div>
      </div>

      <div className="bottom-fixed">
        <button
          className={`btn-primary ${!hasLinks ? 'disabled' : ''}`}
          onClick={() => nav('/complete')}
        >
          I've Published My Content
        </button>
      </div>
    </div>
  )
}

// 11. Campaign Complete
function CampaignCompletePage() {
  const nav = useNavigate()
  const confettiColors = ['#7C5CFC', '#E74C3C', '#2ECC71', '#F39C12', '#3498DB', '#E91E63', '#9C27B0', '#FF9800']

  return (
    <div className="page complete-page">
      <NavHeader title="Campaign Complete" onBack={() => nav('/step4-publish')} />
      <StepProgress currentStep={5} />

      <div className="confetti-bg">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              background: confettiColors[i % confettiColors.length],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              width: `${6 + Math.random() * 8}px`,
              height: `${6 + Math.random() * 8}px`,
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            }}
          />
        ))}
      </div>

      <div className="complete-content">
        <div className="complete-card">
          <div className="party-icon">🎉</div>
          <h2>Congrats, you did it!</h2>
          <p>It's been so cool working with you on the Pikora Instant Bone Broth Collection campaign. Your content is live and looking amazing!</p>
        </div>

        <p className="complete-email">Questions? Email collabs@benable.com</p>
      </div>

      <div className="bottom-fixed">
        <button className="btn-primary" onClick={() => nav('/')}>Back to Home</button>
      </div>
    </div>
  )
}

// ==================== MAIN APP ====================
function App() {
  const location = useLocation()
  const nav = useNavigate()

  const screens = [
    { path: '/', label: 'Discover' },
    { path: '/onboarding', label: 'Onboarding' },
    { path: '/campaigns', label: 'Campaigns' },
    { path: '/campaign-details', label: 'Details' },
    { path: '/step1-product', label: 'Product' },
    { path: '/step2-delivery', label: 'Delivery' },
    { path: '/step3-content', label: 'Content' },
    { path: '/waiting-review', label: 'Review' },
    { path: '/changes-requested', label: 'Changes' },
    { path: '/step4-publish', label: 'Publish' },
    { path: '/complete', label: 'Complete' },
  ]

  return (
    <>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/onboarding/shipping" element={<ShippingAddressPage />} />
        <Route path="/campaigns" element={<CampaignsListPage />} />
        <Route path="/campaign-details" element={<CampaignDetailsPage />} />
        <Route path="/step1-product" element={<Step1ProductPage />} />
        <Route path="/step2-delivery" element={<Step2DeliveryPage />} />
        <Route path="/step3-content" element={<Step3ContentPage />} />
        <Route path="/waiting-review" element={<WaitingReviewPage />} />
        <Route path="/changes-requested" element={<ChangesRequestedPage />} />
        <Route path="/step4-publish" element={<Step4PublishPage />} />
        <Route path="/complete" element={<CampaignCompletePage />} />
      </Routes>

      {/* Dev Navigation */}
      <div className="screen-nav">
        {screens.map(s => (
          <button
            key={s.path}
            className={location.pathname === s.path ? 'active' : ''}
            onClick={() => nav(s.path)}
          >
            {s.label}
          </button>
        ))}
      </div>
    </>
  )
}

export default App
