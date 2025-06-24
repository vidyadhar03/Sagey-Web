import { render, screen } from '@testing-library/react'
import Hero from '../app/components/Hero'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    svg: ({ children, ...props }: any) => <svg {...props}>{children}</svg>,
    circle: ({ children, ...props }: any) => <circle {...props}>{children}</circle>,
    polygon: ({ children, ...props }: any) => <polygon {...props}>{children}</polygon>,
    line: ({ children, ...props }: any) => <line {...props}>{children}</line>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}))

describe('Hero Component', () => {
  it('renders and displays the correct button text', () => {
    render(<Hero />)
    
    // Check for the main CTA button
    const joinWaitlistButton = screen.getByText('Join the Waitlist')
    expect(joinWaitlistButton).toBeInTheDocument()
    
    // Check for the secondary CTA button
    const tryDemoButton = screen.getByText('Try the Demo')
    expect(tryDemoButton).toBeInTheDocument()
    
    // Check for the main headline text
    expect(screen.getByText('Your Spotify.')).toBeInTheDocument()
  })

  it('displays the tagline correctly', () => {
    render(<Hero />)
    
    // Check for the description text
    expect(screen.getByText(/Turn your music data into stunning, AI-powered insights/)).toBeInTheDocument()
  })
}) 