const names = [
    "John Smith",
    "Jane Doe",
    "John Simpson",
    "Jane Davis"
  ];
  
  const existingEmails = [
    "johns@company.com",
    "janed1@company.com"
  ];
  
  function generateEmails(names, existing) {
    const result = [];
    const emailSet = new Set(existing);
  
    for (let fullName of names) {
      const [first, last] = fullName.toLowerCase().split(" ");
      let baseEmail = `${first}${last[0]}@company.com`;
  
      if (!emailSet.has(baseEmail)) {
        result.push(baseEmail);
        emailSet.add(baseEmail);
      } else {
        let i = 1;
        while (emailSet.has(`${first}${last[0]}${i}@company.com`)) {
          i++;
        }
        const newEmail = `${first}${last[0]}${i}@company.com`;
        result.push(newEmail);
        emailSet.add(newEmail);
      }
    }
  
    return result;
  }
  
  const output = generateEmails(names, existingEmails);
  console.log("Generated Emails:");
  console.log(output);