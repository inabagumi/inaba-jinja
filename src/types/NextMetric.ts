import { Metric as OriginalMetric } from 'web-vitals'

type Metric = {
  id: OriginalMetric['id']
  label: 'web-vital'
  name: OriginalMetric['name']
  startTime?: PerformanceEntry['startTime']
  value: OriginalMetric['value']
}

type CustomMetric = {
  id: string
  label: 'custom'
  name:
    | 'Next.js-hydration'
    | 'Next.js-render'
    | 'Next.js-route-change-to-render'
  startTime: PerformanceEntry['startTime']
  value: PerformanceEntry['duration']
}

type NextMetric = Metric | CustomMetric

export default NextMetric
