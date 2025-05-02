
import QuizContainer from "@/components/QuizContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5 flex flex-col items-center py-10">
      <div className="container px-4 py-8">
        <QuizContainer />
      </div>
    </div>
  );
};

export default Index;
