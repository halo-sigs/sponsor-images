import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.small,
    },
    {
      title: 'Generous Backers',
      monthlyDollars: 3,
      preset: presets.base,
    },
    {
      title: 'Bronze Sponsors',
      monthlyDollars: 7,
      preset: presets.large,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 15,
      preset: presets.large,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 30,
      preset: presets.xl,
    },
  ],
})
