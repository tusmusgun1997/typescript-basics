
// We'll begin by importing some important TypeScript concepts.
// Let's create a simple utility function that adds two numbers.
function add(a: number, b: number): number {
    return a + b;
  }
  
  // Now, let's create a type to represent the return type of the 'add' function.
  // We use the 'ReturnType' utility type to extract the return type.
  type AddFunctionReturnType = ReturnType<typeof add>;
  
  // Here, 'AddFunctionReturnType' will be 'number' since 'add' returns a number.
  const result: AddFunctionReturnType = add(5, 3);
  console.log(result); // Output: 8
  
  // ---------------------------------------------------------------------------
  
  // TypeScript offers utility types to help with common type transformations.
  // The 'Partial' utility type allows us to make properties of a type optional.
  interface Assignment {
    studentID: string;
    title: string;
    grade: number;
    verified?: boolean; // 'verified' is an optional property
  }
  
  // Let's create an 'updateAssignment' function that accepts a 'partial' object
  // and updates the assignment properties.
  const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
  ): Assignment => {
    return { ...assign, ...propsToUpdate };
  };
  
  // Create an example assignment
  const assign1: Assignment = {
    studentID: "123",
    title: "Homework",
    grade: 95,
  };
  
  // Update the grade using 'updateAssignment'
  const assignGraded = updateAssignment(assign1, { grade: 88 });
  
  console.log(assignGraded);
  // Output: { studentID: '123', title: 'Homework', grade: 88 }
  
  // ---------------------------------------------------------------------------
  // REQUIRED UTILITY TYPE
  
  // The 'Required' utility type makes all properties of a type required.
  type RequiredAssignment = Required<Assignment>;
  
  // ---------------------------------------------------------------------------
  // READONLY UTILITY TYPE
  
  // The 'Readonly' utility type makes all properties of a type read-only.
  type ReadOnlyAssignment = Readonly<Assignment>;
  
  // ---------------------------------------------------------------------------
  // RECORD UTILITY TYPE
  
  // The 'Record' utility type creates an object type with specific keys and values.
  type HexColorMap = Record<string, string>;
  
  const hexColors: HexColorMap = {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  
  // ---------------------------------------------------------------------------
  // STRING LITERAL TYPES
  
  // TypeScript allows creating string literal types.
  type Students = "Sarah" | "Kelly";
  type LetterGrades = "A" | "B" | "C" | "D" | "U"; // U stands for "Unsatisfactory"
  
  // ---------------------------------------------------------------------------
  // EXCLUDE UTILITY TYPE
  
  // The 'Exclude' utility type removes types from a union.
  type AdjustedGrade = Exclude<LetterGrades, "U">; // Removes "U" from LetterGrades
  
  // ---------------------------------------------------------------------------
  // EXTRACT UTILITY TYPE
  
  // The 'Extract' utility type extracts types from a union.
  type HighGrades = Extract<LetterGrades, "A" | "B">; // Extracts "A" and "B"
  
  // ---------------------------------------------------------------------------
  // NON-NULLABLE UTILITY TYPE
  
  // The 'NonNullable' utility type removes null and undefined from a type.
  type AllPossibleGrades = "Dave" | "John" | null | undefined;
  type NamesOnly = NonNullable<AllPossibleGrades>; // Removes null and undefined
  
  // ---------------------------------------------------------------------------
  // PICK UTILITY TYPE
  
  // The 'Pick' utility type selects specific properties from a type.
  type AssignResult = Pick<Assignment, "studentID" | "grade">;
  
  // ---------------------------------------------------------------------------
  // OMIT UTILITY TYPE
  
  // The 'Omit' utility type omits specific properties from a type.
  type AssignPreview = Omit<Assignment, "grade" | "verified">;
  
  // ---------------------------------------------------------------------------
  // PARAMETERS UTILITY TYPE
  
  // The 'Parameters' utility type extracts the parameter types of a function.
  type AssignParams = Parameters<typeof updateAssignment>;
  
  // ---------------------------------------------------------------------------
  // RETURN TYPE UTILITY TYPE
  
  // The 'ReturnType' utility type extracts the return type of a function.
  type FetchUsersReturnType = ReturnType<typeof fetchUsers>;
  
  // ---------------------------------------------------------------------------
  // AWAITED UTILITY TYPE
  
  // The 'awaited' utility type helps with promise return types.
  // Let's create a fetch function as an example.
  interface User {
    id: number;
    name: string;
  }
  
  function fetchUsers(): Promise<User[]> {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("Error:", error);
        throw error;
      });
  }
  
  // Now, we can use the 'Awaited' utility type to get the resolved type.
  type FetchUsersResolvedType = Awaited<ReturnType<typeof fetchUsers>>;
  
  // ---------------------------------------------------------------------------
  // Let's use our fetchUsers function to fetch and log users.
  fetchUsers()
    .then((users) => {
      console.log("Fetched users:", users);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
  