export function generateFallback({
  name,
  city,
  position,
  email,
  tel,
  education,
  experience,
  skills,
  goals,
}) {
  return `
Hello! My name is ${name}, I am based in ${city}, and I am currently seeking opportunities as a ${position}.
I hold a degree in ${education}, which has provided me with a strong foundation and allowed me to develop professional skills relevant to my field.

My experience: ${experience}.
My skills: ${skills}.
This experience has helped me work effectively in teams, handle tasks efficiently, and achieve meaningful results.

My career goal is ${goals}.
I am eager to grow professionally, improve my skills, and contribute significantly to any project I join.

You can contact me via email: ${email} or by phone: ${tel}.
  `.trim();
}
