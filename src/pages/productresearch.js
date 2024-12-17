import React from 'react';

function ProductResearch() {
  const steps = [
    { id: 1, title: "Research Overview", description: "This is where we provide a detailed overview of the product research process." },
    { id: 2, title: "Competitive Analysis", description: "Analyze competitors in the market to understand the competitive landscape." },
    { id: 3, title: "User Review Insights", description: "Collect user feedback and reviews to improve the product's features and experience." },
    { id: 4, title: "Market Research", description: "Conduct thorough market research to understand trends, opportunities, and challenges." },
    // Add more steps here if needed
  ];

  return (
    <div style={{ padding: "20px" }}>
      <div style={containerStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Product Research Timeline</h2>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
          {steps.map((step, index) => {
            // Determine if step should be on the left or right based on index
            const isLeft = index % 2 === 0;

            return (
              <div style={{ ...stepStyle, justifyContent: isLeft ? "flex-start" : "flex-end" }} key={step.id}>
                <div style={circleStyle}>{step.id}</div>
                <div style={wayStyle}></div>
                <div style={contentStyle}>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Styling for the container
const containerStyle = {
  maxWidth: '1200px', // Maximum width of the container
  margin: '0 auto', // Centering the container horizontally
  padding: '20px', // Optional padding inside the container
};

// Styling for the timeline
const stepStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',
  width: '100%',
};

const circleStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#ffb800',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '16px',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const wayStyle = {
  height: '50px', // adjust the height of the line
  borderLeft: '2px solid #ffb800',
  marginLeft: '15px',
};

export default ProductResearch;
