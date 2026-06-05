# Payments — Stripe (primary rail)

Stripe is the payment rail for the challenge. It has **no payout threshold**
(unlike Gumroad's $100) and low AU fees, so it's how cash actually reaches the
bank inside the 2-week window.

## Fees & payout timing (AU)
- **Fee:** 1.7% + A$0.30 per domestic card charge.
  - $30 service → ~$0.81 fee → **net ~$29.19**.
- **First payout:** ~7 days after the first successful charge, then rolling
  (~2-day) afterwards.
- **Action point:** make the first sale **early in week 1** so the payout clears
  before day 14.

## Engine B — the $30 service Payment Link  (primary use)
A Payment Link is a URL anyone can pay via card — perfect to paste into outreach.

Manual setup (Stripe Dashboard):
1. **Products → Add product**
   - Name: `One-Page Website Build`
   - Price: `A$30.00`, one-time
   - (Optional) Description: "Clean, mobile-friendly one-page website, built &
     deployed within 2–3 days."
2. **Payment Links → New** → select that product → **Create link**.
3. Copy the link (e.g. `https://buy.stripe.com/xxxx`).
4. Drop it into the Engine B outreach message, after they say yes:
   > "Great! Here's the secure payment link to lock it in: [link]. As soon as
   > that's through I'll start on your site."

Tip: you can also create a `$15` "custom domain setup" link for the upsell.

## Engine A — product sales
Connect Stripe as the payout method inside **Ko-fi** (Settings → Payments). The
$9 Launch Kit sales then settle through Stripe to your bank with no threshold.

## When the Stripe MCP is connected here
Once the Stripe plugin + API key are live in this session, Claude can create the
product and Payment Link directly (no dashboard clicking) and hand you the URL.
Just say the word.
