import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Lightbulb, ThumbsUp, Send, Sparkles } from "lucide-react";

interface Topic {
  id: number;
  title: string;
  description: string;
  name: string;
  likes: number;
  categories: string;
}

export const HandleTopics = () => {
  const { toast } = useToast();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [newTopicRequest, setNewTopicRequest] = useState({ title: "", description: "", name: "", categories: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [topicsFetched, setTopicsFetched] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {

    const fetchTopics = async () => {
      try {
        const res = await fetch(`/api/topics/listUnaccepted`);

        const data = await res.json();
        console.log("data", data);

        setTopics(data);
      } catch {
        setMessage("Network error");
      }
    };
    if (!topicsFetched) {
        fetchTopics();
        setTopicsFetched(true);
    }

  }, [topicsFetched], );



  const handleSubmit = async (topic:Topic) => {

    
    if (!topic.title.trim() || !topic.name.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and your name.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

      const response = await fetch("/api/topics/accept", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              id: topic.id,
              title: topic.title,
              description: topic.description || "No description provided",
              name: topic.name,
              categories: topic.categories || "Uncategorized",
          }),
        });
        console.log("resp", response);

     if (response.status === 400) {
           toast({
             title: "Topic update failed",
             description: "There was an error when trying to update a topic.",
             variant: "destructive",
           });
         } else {
           toast({
             title: "Topic Updated! 🎉",
             description: "The topic has been accepted and will be displayed in the topic list.",
           });
         }

    setIsSubmitting(false);
  };

  return (
    <section id="topics" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Session Topic Suggestions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check the topics and accept them that they can be displayed in the topic list !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Topic List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={20} />
              <span className="font-semibold">{topics.length} Topics to be accepted</span>
            </div>

            {topics.map((topic, index) => (


              <Card
                key={topic.id} 
                className="glass-card hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-5">
                  <div className="flex gap-4">

                    {/* Content */}
                    <div className="flex-1">
                      <div className="font-semibold text-lg mb-1">
                          <Input
                            id="topic-title"
                            value={topic.title}

                          />

                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                          <Textarea
                            id="topic-desc"
                            placeholder="What would you like to cover?"
                            value={topic.description}

                            rows={3}
                          />

                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                           <Input
                               id="topic-categories"
                               value={topic.categories}

                           />

                        <div className="flex flex-wrap items-center gap-2">
                          <Input
                             id="topic-name"
                             value={topic.name}

                          />
                        </div>

                        <Button onClick={() => handleSubmit(topic)} className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                              <>Submitting...</>
                            ) : (
                              <>
                                <Send size={16} />
                                Accept Topic
                              </>
                            )}
                          </Button>


                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
