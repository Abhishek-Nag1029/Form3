export const fetchAdditionalQuestions = async (topic) => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000);
  
    const questions = {
      Technology: [
        { id: 1, question: 'What is your expertise in?' },
        { id: 2, question: 'what are your key skills?' },
      ],
      Health: [
        { id: 1, question: 'How do you take care of your health?' },
        { id: 2, question: 'Do you have any disease?' },
      ],
      Education: [
        { id: 1, question: 'What are your education qualifications?' },
        { id: 2, question: 'what is your dream carrer?' },
      ],
    };
  
    localStorage.setItem('additionalQuestions', JSON.stringify(questions));
    const storedQuestions = JSON.parse(localStorage.getItem('additionalQuestions'));
    return storedQuestions[topic] || [];
  };