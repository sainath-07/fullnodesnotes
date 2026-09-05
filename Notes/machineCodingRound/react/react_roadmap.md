

🚀 React Interview Roadmap
# 🔴 Tier 1 — Must Know Extremely Well

These are the topics you should be able to explain, code, debug, and answer output/behavior questions on.

1. React Fundamentals

Start here.

What is React?
Why React?
React vs vanilla JavaScript
React library vs framework
Declarative vs imperative programming
Components
JSX
JSX vs HTML
JSX expressions
JSX rules
Fragments
ReactDOM
createRoot()
Rendering elements
Component composition
You should be able to explain:

Why does React make UI development easier than directly manipulating the DOM?

2. Components

Understand components deeply.

Functional components
Component naming
Component composition
Parent/child components
Reusable components
Component responsibilities
Presentational components
Container components
Component communication

Example:

function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
    </div>
  );
}
3. Props ⭐⭐⭐

Very important.

Learn:

What are props?
Passing props
Reading props
Props destructuring
Default values
Passing objects
Passing arrays
Passing functions
Passing JSX
children
Props are read-only
Parent → child communication
Interview question

How does a child component communicate with its parent?

Answer:

Pass a callback function from parent to child through props.

4. State ⭐⭐⭐

Master this.

What is state?
useState
State initialization
Updating state
Functional state updates
State batching
State immutability
Object state
Array state
Multiple state variables
Lazy state initialization

Example:

const [count, setCount] = useState(0);

setCount(count + 1);

Understand why this can behave differently from:

setCount(prev => prev + 1);
5. State vs Props ⭐⭐⭐

You should instantly know:

Props	State
Passed from parent	Owned by component
Read-only	Can be updated
External input	Internal data
Parent controls	Component controls
6. Events

Learn:

onClick
onChange
onSubmit
onMouseEnter
onKeyDown
Event object
Passing arguments
Event handlers
Preventing default behavior
Synthetic events

Example:

<button onClick={handleClick}>
  Click
</button>

Understand why this is wrong:

<button onClick={handleClick()}>
7. Conditional Rendering

Learn:

if
condition ? A : B
condition && A
condition || A

Also understand common bugs with:

0 && <Component />
8. Lists & Keys ⭐⭐⭐

Very important.

Learn:

.map()
Rendering lists
key
Why keys are required
Stable keys
Why array index can be dangerous
Key changes and remounting
Reconciliation relationship

Interview question:

Why shouldn't we use array index as a key?

9. Forms ⭐⭐⭐

Learn:

Controlled components
Uncontrolled components
Input state
Form submission
Validation
Multiple inputs
Checkbox
Radio
Select
File input
Form reset
Must know:
Controlled
    ↓
React state
    ↓
Input value
    ↓
onChange
🔴 Tier 1 React Hooks
10. useState

Already mentioned, but master:

Functional updates
Batching
Lazy initialization
Object updates
Array updates
State immutability
11. useEffect ⭐⭐⭐⭐⭐

This is one of the most important React interview topics.

Learn:

Why useEffect exists
Effect execution
Dependency array
No dependency array
Empty dependency array
Specific dependencies
Cleanup function
Effect lifecycle
Fetching data
Event listeners
Timers
Subscriptions
Race conditions
Stale closures
Infinite loops

Understand:

useEffect(() => {
  console.log("effect");
}, []);

vs

useEffect(() => {
  console.log("effect");
});

vs

useEffect(() => {
  console.log("effect");
}, [count]);
12. useRef ⭐⭐⭐

Learn:

DOM references
Mutable values
useRef
Why updating ref.current doesn't trigger rendering
Previous values
Timers
Focus management

Example:

const inputRef = useRef(null);

inputRef.current.focus();
13. useMemo

Learn:

Memoization
Expensive calculations
Dependency array
When it helps
When it doesn't
Overusing memoization
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
14. useCallback

Learn:

Function memoization
Referential equality
Dependency array
Relationship with React.memo
const handleClick = useCallback(() => {
  // ...
}, []);
15. React.memo

Understand:

Component memoization
Props comparison
Re-render prevention
Shallow comparison
useMemo vs useCallback vs React.memo

This combination is a common interview area:

React.memo
    +
useCallback
    +
useMemo
16. Context API ⭐⭐⭐

Learn:

createContext
Provider
Consumer
useContext
Context value
Context re-renders
Context vs props
Context vs Redux

Example:

const ThemeContext = createContext();

<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
🔴 Tier 1 React Architecture
17. Component Communication ⭐⭐⭐

Master:

Parent → Child
       ↓
      Props

Child → Parent
       ↓
Callback Props

Sibling → Sibling
       ↓
Lift State Up

Global
       ↓
Context / State Management
18. Lifting State Up

Understand:

Shared state
Common parent
State ownership
Avoiding duplicate state
19. Derived State

Very important.

Understand why you shouldn't unnecessarily do:

const [fullName, setFullName] = useState("");

if you can calculate:

const fullName = `${firstName} ${lastName}`;

Interviewers often test state design.

20. Component Re-rendering ⭐⭐⭐⭐⭐

This is a major MAANG interview topic.

Understand:

What causes a component to render?
Parent re-render
State update
Context update
Props changes
Referential equality
React.memo
Re-render vs DOM update

Very important distinction:

A React component re-rendering does not necessarily mean the browser DOM is updated.

# 🔥 Tier 2 — React Internals

Once fundamentals are strong, move here.

21. Virtual DOM ⭐⭐⭐

Understand:

What Virtual DOM means
Why React uses it
Virtual DOM vs real DOM
Reconciliation
Rendering
Commit phase

Don't memorize:

"Virtual DOM is always faster."

That's an oversimplification.

22. Reconciliation ⭐⭐⭐⭐⭐

Very important.

Learn:

Reconciliation
Element identity
Component identity
Keys
Tree comparison
Updating vs remounting
Why keys matter
23. Fiber Architecture ⭐⭐⭐⭐

Understand conceptually:

React Element
      ↓
Fiber
      ↓
Render Phase
      ↓
Commit Phase
      ↓
DOM

Learn:

What Fiber is
Why Fiber was introduced
Work units
Interruptible rendering
Render phase
Commit phase
24. Render Phase vs Commit Phase ⭐⭐⭐⭐⭐

Know this clearly.

Render phase

React determines:

What should change?

Commit phase

React applies:

The actual changes.

This is a common advanced interview question.

25. React Strict Mode

Learn:

Why Strict Mode exists
Development-only checks
Effects behavior in development
Detecting unsafe patterns

Don't confuse development behavior with production behavior.

🔥 Tier 2 — Advanced Hooks
26. useReducer

Learn:

Reducer
Action
Dispatch
State transitions
Complex state logic
useReducer vs useState
27. useLayoutEffect

Understand:

Difference from useEffect
Browser paint
Synchronous layout-related work
When it is appropriate
28. Custom Hooks ⭐⭐⭐

Very important for real projects.

Learn:

function useFetch(url) {
  // reusable logic
}

Understand:

Hook rules
Reusing logic
Custom hook naming
State/effect encapsulation
29. Rules of Hooks ⭐⭐⭐

Know:

Only call Hooks at the top level.
Only call Hooks from React functions/custom Hooks.

Understand why conditional hooks are problematic.

🔥 Tier 2 — Performance
30. React Performance ⭐⭐⭐⭐⭐

Learn:

Unnecessary re-renders
React.memo
useMemo
useCallback
Code splitting
Lazy loading
Suspense
Virtualization
Large lists
Expensive calculations
Profiler
31. React.lazy
const Dashboard = lazy(() => import("./Dashboard"));

Understand:

Code splitting
Dynamic imports
Bundle size
Loading states
32. Suspense ⭐⭐⭐

Since you mentioned Suspense earlier, learn it properly here.

Understand:

What Suspense does
fallback
Lazy-loaded components
Suspense boundaries
Modern React use cases
33. Error Boundaries ⭐⭐⭐

Important distinction:

Error Boundaries are React concepts, not JavaScript core concepts.

Learn:

What errors they catch
What errors they don't catch
Fallback UI
Class-based Error Boundaries
Error handling architecture
34. List Performance ⭐⭐⭐

Learn:

Pagination
Infinite scrolling
Windowing
Virtualization
Large list optimization

Libraries such as virtualization libraries can come later.

🔥 Tier 2 — State Management
35. Context API

Already covered.

Then learn:

36. Redux ⭐⭐⭐⭐

For interviews:

Why Redux?
Store
State
Action
Reducer
Dispatch
Selector
Middleware
Redux Toolkit
Immutability
Redux vs Context
37. Redux Toolkit ⭐⭐⭐⭐

Learn modern Redux:

configureStore
createSlice
createAsyncThunk
Selectors
Middleware
RTK Query — awareness/strong knowledge depending on role
38. Server State vs Client State ⭐⭐⭐⭐⭐

This is increasingly important.

Understand:

Client State
↓
UI state
Modal
Theme
Form state

Server State
↓
API data
Caching
Loading
Error
Refetching
Synchronization

Then understand why tools like TanStack Query are useful.

39. TanStack Query / React Query ⭐⭐⭐⭐

Learn:

Query
Mutation
Cache
Stale data
Refetching
Query keys
Loading states
Error states
Pagination
Infinite queries
🔥 Tier 2 — Routing
40. React Router ⭐⭐⭐

Learn:

Routes
Route parameters
Nested routes
Navigation
Link
NavLink
useNavigate
useParams
useSearchParams
Protected routes
Lazy routes
404 routes
🔥 Tier 2 — API Integration
41. React + APIs ⭐⭐⭐⭐⭐

You already know Fetch/Axios, so connect that knowledge to React.

Learn:

Component
    ↓
API request
    ↓
Loading
    ↓
Success
    ↓
Error

Handle:

Loading
Error
Empty state
Success
Cancellation
Race conditions
Retry
Pagination
Infinite scrolling
Optimistic updates
🔥 Tier 2 — Forms
42. Advanced Forms

Learn:

Controlled forms
Uncontrolled forms
Form validation
Schema validation
Dynamic forms
Form performance
React Hook Form
Validation libraries

For interviews, understand why uncontrolled forms can reduce unnecessary re-renders.

🔥 Tier 2 — Testing
43. React Testing

Learn:

Unit testing
Component testing
Integration testing
Jest/Vitest concepts
React Testing Library
User interactions
Mocking API calls
Testing async UI
Testing hooks

You don't need to become a testing expert immediately, but for senior/product interviews this becomes valuable.

🔥 Tier 2 — React + TypeScript

Since you're targeting modern frontend roles, this is important.

44. TypeScript with React ⭐⭐⭐⭐⭐

Learn:

Component props typing
State typing
Event typing
children
useRef
useState
useReducer
Custom hooks
Generic components
API response types
Union types
Utility types

Example:

type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <h2>{name}</h2>;
}

🔥 Tier 2 — React Security
45. Frontend Security

Learn:

XSS
dangerouslySetInnerHTML
CSRF awareness
Token storage considerations
Cookie security
Authentication vs authorization
CORS
Input sanitization
Secure API calls
🟡 Tier 3 — Advanced React

After Tier 1 and Tier 2:

46. Concurrent Rendering

Understand conceptually:

Concurrent rendering
Interruptible rendering
Scheduling
Priorities
47. useTransition
const [isPending, startTransition] = useTransition();

Understand:

Urgent vs non-urgent updates
UI responsiveness
Transition updates
48. useDeferredValue

Understand:

Deferring expensive UI updates
Search/filter scenarios
Difference from debouncing
49. useId

Understand:

Stable IDs
Accessibility
Server/client consistency
50. useSyncExternalStore

Know:

External stores
Subscription model
Why React provides it

# 🟢 Tier 3 — React Ecosystem Awareness

Know what these are and when they are useful:

Next.js
Remix
TanStack Query
Redux Toolkit
Zustand
React Hook Form
React Router
React Testing Library
Vitest
Jest
Storybook
React Native


🧩 React Coding Interview Questions

You should eventually be able to implement these without copying from tutorials.

# Easy → Intermediate
Counter
Todo list
Search/filter
Tabs
Accordion
Modal
Dropdown
Pagination
Form validation
Stopwatch
Countdown timer
Password strength indicator

# Intermediate → Advanced
Debounced search
Autocomplete
Infinite scrolling
Data table
Sort/filter/pagination table
Shopping cart
Multi-step form
File upload
Drag and drop
Optimistic UI
Undo/redo
Nested comments
Tree view
Virtualized list
Custom useFetch
Custom useDebounce
Custom usePrevious
Custom useLocalStorage


🏗️ React Machine Coding Round

For product companies, this is extremely important.

Practice building:

Level 1
Todo
Counter
Tabs
Accordion
Modal

Level 2
Autocomplete
Pagination
Data table
Shopping cart
Multi-step form

Level 3
Infinite scroll
File explorer
Nested comments
Kanban board
Virtualized list
Chat application
Notification system

When solving, focus on:

Component design
State design
API design
Reusable components
Error handling
Loading states
Performance
Accessibility
Responsive UI

OTP Input
Timer
Multi-Step Form
Form Validation
Image Carousel
Star Rating
Comments System
Like Button
Typeahead Search
Virtualized List
Kanban Board


🏗️ React Frontend System Design

For MAANG/FAANG interviews, eventually add this.

Learn how to design:

1. E-commerce
Product listing
Search
Filters
Cart
Checkout
Authentication
2. Social media
Feed
Infinite scrolling
Like/comment
Notifications
Real-time updates
3. Chat application
Messages
WebSocket
Online status
Typing indicator
Pagination
Message caching
4. YouTube-like application
Video listing
Search
Infinite scrolling
Video player
Recommendations
Caching
5. Dashboard
Charts
Filters
Pagination
API calls
Caching
Permissions



🎯 Your React Priority System

# 🔴 Tier 1 — Master
React fundamentals
JSX
Components
Props
State
Events
Conditional rendering
Lists
Keys
Forms
useState
useEffect
useRef
useContext
Component communication
Lifting state
Re-rendering
State immutability
Custom hooks
Rules of Hooks
React.memo
useMemo
useCallback


# 🟠 Tier 2 — Strong
useReducer
useLayoutEffect
Context architecture
Virtual DOM
Reconciliation
Fiber
Render/commit phases
Strict Mode
Suspense
Error Boundaries
React.lazy
Performance
Redux
Redux Toolkit
React Router
API integration
Server state
TanStack Query
Advanced forms
Testing
TypeScript + React
Security

# 🟡 Tier 3 — Advanced
Concurrent rendering
useTransition
useDeferredValue
useId
useSyncExternalStore
Advanced Suspense
Streaming
Server Components
React internals

# 🟢 Ecosystem Awareness
Next.js
Zustand
React Hook Form
Storybook
Vitest
Jest
React Testing Library
React Native