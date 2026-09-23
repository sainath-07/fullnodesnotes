I am preparing for a React.js Machine Coding Round.

TASK: OTP Input

Teach me this task as if I am preparing for a Product-Based Company interview.

I want a complete, interview-focused explanation and implementation.

Follow the structure below strictly.

==================================================
1. WHAT IS THIS TASK?
==================================================

Explain:

- What is OTP Input?
- Simple technical definition
- Explain it in very simple/language
- Give a real-world/layer-by-layer example
- Where is it used in real applications?
- Give 2–3 real-world examples

==================================================
2. WHAT PROBLEM DOES IT SOLVE?
==================================================

Explain:

- What problem does this UI/component solve?
- Why would a company build this?
- What problem would exist without it?
- What is the benefit to users?
- What is the benefit to developers?

==================================================
3. MACHINE CODING REQUIREMENTS
==================================================

Give realistic interview requirements.

Separate them into:

A. Must-have requirements
B. Nice-to-have requirements
C. Advanced requirements

Also mention:

- What requirements should I clarify with the interviewer before coding?
- What assumptions should I state?

==================================================
4. EXPECTED UI
==================================================

Show a simple ASCII visualization of the UI.

Example:

+----------------------------------+
|              TASK                |
+----------------------------------+
|                                  |
|          UI CONTENT              |
|                                  |
+----------------------------------+

Explain what each part does.

==================================================
5. HOW TO APPROACH THE PROBLEM
==================================================

Explain the implementation strategy BEFORE writing code.

Show:

Requirement
   ↓
Component Design
   ↓
State Design
   ↓
Event Handling
   ↓
Business Logic
   ↓
UI Rendering
   ↓
Edge Cases
   ↓
Accessibility
   ↓
Performance

Explain every step in simple language.

==================================================
6. COMPONENT DESIGN
==================================================

Design the React component structure.

Example:

App
 ├── ComponentA
 ├── ComponentB
 └── ComponentC

Explain:

- Which components are needed?
- Why create each component?
- Which component owns the state?
- Which state should be lifted?
- Which components should be reusable?
- Where should business logic live?

Also explain if a single component is enough for the problem.

==================================================
7. STATE DESIGN
==================================================

Explain all required state.

For each state explain:

- State name
- Data type
- Initial value
- Why it is needed
- Who owns it
- Who reads it
- Who updates it

Show it in a table.

Also answer:

- What should be state?
- What should NOT be state?
- What can be derived from existing state?
- Can useReducer be useful here?
- Is Context required?
- What would cause unnecessary state?

==================================================
8. DATA STRUCTURE
==================================================

Explain the data structure required.

For example:

Array
Array of objects
Object/map
Set
Tree
Nested object
Normalized state

Show sample data.

Explain why this data structure is appropriate.

Also discuss:

- lookup complexity
- update complexity
- delete complexity
- search complexity

==================================================
9. FULL REACT CODE
==================================================

Provide complete working React code.

Requirements:

- Functional components
- Modern React
- Hooks
- Clean component structure
- Readable variable names
- No unnecessary libraries
- Avoid overengineering
- Production-quality coding style

Use:

- useState when appropriate
- useEffect when appropriate
- useRef when appropriate
- useMemo only when justified
- useCallback only when justified
- useReducer when state complexity requires it
- custom hooks when reusable logic makes sense

Do NOT use a hook just for the sake of using it.

==================================================
10. CODE WALKTHROUGH
==================================================

Explain the code step-by-step.

For every important block explain:

WHAT it does
WHY it is needed
HOW it works

Explain:

- state
- handlers
- helper functions
- effects
- refs
- rendering
- conditional rendering
- array operations
- event handling

Use small code snippets while explaining.

==================================================
11. EXECUTION FLOW
==================================================

Explain exactly what happens when the user interacts with the UI.

Example:

User clicks button
       ↓
Event handler runs
       ↓
State changes
       ↓
React schedules update
       ↓
Component renders
       ↓
Derived values are calculated
       ↓
UI updates

Give the actual execution flow for this task.

==================================================
12. IMPORTANT REACT CONCEPTS USED
==================================================

Identify the React concepts involved.

For each explain:

- What is it?
- Why is it used here?
- What would happen if we did not use it?

Examples:

useState
useEffect
useRef
useMemo
useCallback
useReducer
Context
Controlled components
Derived state
Conditional rendering
Component composition

Only include concepts actually relevant to the task.

==================================================
13. COMMON DEVELOPER MISTAKES
==================================================

List at least 10 common mistakes.

For every mistake explain:

❌ Wrong approach

Why it is wrong

✅ Correct approach

Why it is better

Include:

- state mistakes
- React mistakes
- event-handling mistakes
- performance mistakes
- cleanup mistakes
- accessibility mistakes
- edge-case mistakes

==================================================
14. EDGE CASES
==================================================

List realistic edge cases.

For each explain:

Problem
Expected behavior
How to handle it

Include at least:

- empty state
- invalid input
- duplicate data
- rapid clicks
- large data
- API failure if applicable
- loading state if applicable
- error state if applicable
- mobile/responsive behavior if applicable
- component unmount if applicable

==================================================
15. ACCESSIBILITY
==================================================

Explain accessibility requirements for this task.

Cover only relevant items such as:

- semantic HTML
- button vs div
- label
- keyboard navigation
- Enter
- Space
- Escape
- Arrow keys
- focus management
- focus trap
- ARIA
- aria-label
- aria-expanded
- aria-selected
- aria-controls
- screen readers
- color contrast

Explain what should be done in a production application.

==================================================
16. PERFORMANCE
==================================================

Explain potential performance issues.

Answer:

- What happens with 10 items?
- What happens with 1,000 items?
- What happens with 100,000 items?
- Can unnecessary re-renders happen?
- Should useMemo be used?
- Should useCallback be used?
- Should React.memo be used?
- Should virtualization be used?
- Should debounce/throttle be used?
- Can event handlers cause performance problems?

Only recommend optimization when there is a real reason.

==================================================
17. ASYNC / API CONSIDERATIONS
==================================================

If the task involves APIs, explain:

- loading state
- success state
- empty state
- error state
- retry
- cancellation
- AbortController
- race conditions
- stale responses
- optimistic updates
- pagination
- caching

If the task does NOT require an API, clearly say:

"API is not required for the basic version."

Then explain how the task could be connected to an API in a real application.

==================================================
18. BROWSER APIs
==================================================

Identify relevant browser APIs.

For example:

- localStorage
- sessionStorage
- IntersectionObserver
- ResizeObserver
- Clipboard API
- Drag and Drop API
- File API
- URLSearchParams
- History API
- WebSocket
- requestAnimationFrame
- setTimeout
- setInterval

Explain only the APIs relevant to this task.

==================================================
19. ALTERNATIVE IMPLEMENTATIONS
==================================================

Show 2 approaches where meaningful.

For example:

Approach 1:
Simple implementation

Approach 2:
Production/reusable implementation

Compare:

- simplicity
- readability
- scalability
- performance
- maintainability

Do NOT unnecessarily create alternatives when one approach is clearly sufficient.

==================================================
20. INTERVIEWER FOLLOW-UP QUESTIONS
==================================================

Give at least 15 interview questions that can be asked after I finish coding.

Divide them into:

Easy
Medium
Advanced

Questions should be practical, not generic theory.

Example:

"Why did you keep this value in state?"

"What happens if the user clicks this button 10 times quickly?"

"How would you handle 100,000 records?"

"How would you make this component reusable?"

"How would you handle an API race condition?"

==================================================
21. INTERVIEWER TRAPS
==================================================

Tell me what interviewers may intentionally change during the round.

For example:

Basic requirement:
"Build a search."

Then interviewer may add:

"Now debounce it."

"Now call an API."

"Now add pagination."

"Now handle API errors."

"Now cancel previous requests."

"Now support keyboard navigation."

Give similar progressive requirement changes for this task.

==================================================
22. MACHINE CODING ROUND PROGRESSION
==================================================

Show how I should build the solution during a 60-minute interview.

Example:

0–5 min
Understand requirements

5–10 min
Design components and state

10–30 min
Build core functionality

30–40 min
Handle edge cases

40–50 min
Accessibility/performance

50–60 min
Testing + explanation

Explain exactly what I should prioritize if time is running out.

==================================================
23. TEST CASES
==================================================

Give practical test cases.

Format:

Test Case
Input / Action
Expected Result

Include:

- happy path
- empty case
- invalid case
- boundary case
- repeated interaction
- large data
- error case
- accessibility case

==================================================
24. WHAT I SHOULD SAY WHILE CODING
==================================================

Give interview-ready sentences I can say while implementing.

For example:

"I'll first define the data structure..."

"I'll keep this as derived data because..."

"I don't need separate state for..."

"I'll use useEffect here because..."

"I need cleanup because..."

"I'll handle this edge case after the happy path..."

Make these natural sentences that I can actually speak.

==================================================
25. HOW I SHOULD EXPLAIN THE FINAL SOLUTION
==================================================

Give me a 1-minute explanation.

Then a 3-minute explanation.

Then a 5-minute deep explanation.

These should sound like something I can actually say to an interviewer.

==================================================
26. FINAL INTERVIEW CHEAT SHEET
==================================================

At the end provide:

WHAT
WHY
HOW
STATE
DATA STRUCTURE
IMPORTANT HOOKS
KEY LOGIC
EDGE CASES
COMMON MISTAKES
ACCESSIBILITY
PERFORMANCE
API CONSIDERATIONS
INTERVIEWER FOLLOW-UPS

Keep this section concise and interview-ready.

==================================================
27. DIFFICULTY
==================================================

Classify the task:

Beginner
Easy
Easy-Intermediate
Intermediate
Intermediate-Advanced
Advanced

Explain why.

==================================================
28. RELATED MACHINE CODING TASKS
==================================================

Give 5–10 related tasks that I should learn after this one.

Group them by:

Same React concept
Same browser concept
Same state-management pattern
More advanced version

==================================================
IMPORTANT TEACHING STYLE
==================================================

Use:

- Simple English
- Layman examples
- Practical examples
- Clear headings
- Tables where useful
- ASCII diagrams
- Code blocks
- Interview-ready explanations

Avoid:

- unnecessary theory
- complicated terminology without explanation
- overengineering
- unnecessary libraries
- unnecessarily complex code

Whenever you introduce a complex concept, explain:

What?
Why?
How?
Real-world example?

==================================================
IMPORTANT CODING RULE
==================================================

Do NOT just give me the final solution.

Teach me how to THINK about the problem so that if the interviewer changes the requirement, I can modify the solution myself.

After the main solution, tell me:

"What part of this problem is the interviewer actually testing?"

==================================================
FINAL QUESTION
==================================================

At the very end give me:

1. What I MUST remember
2. What I SHOULD practice
3. What advanced variation I should try next
4. 5 questions I should answer myself without looking at the solution