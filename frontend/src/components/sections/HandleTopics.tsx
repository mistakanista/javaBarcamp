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

interface TopicRequest {
  title: string;
  description: string;
  name: string;
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


  const handleVote = async (id: number) => {
    try {
            const res = await fetch(`/api/topics/like?id=${id}`);

            const text = await res.text();
            console.log("test", text)// Body auslesen
            setMessage(text);
            setTopicsFetched(false)
          } catch {
            setMessage("Network error");
          }
    
    toast({
      title: "Vote recorded! 👍",
      description: "Thanks for supporting this topic idea.",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTopicRequest.title.trim() || !newTopicRequest.name.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide a title and your name.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const response = await fetch("/api/topics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              title: newTopicRequest.title,
              description: newTopicRequest.description || "No description provided",
              name: newTopicRequest.name,
              categories: newTopicRequest.categories || "Uncategorized",
          }),
        });
        console.log("resp", response);

     if (response.status === 400) {
           toast({
             title: "Topic suggestion failed",
             description: "There was an error when trying to suggest a topic.",
             variant: "destructive",
           });
         } else {
           toast({
             title: "Topic Submitted! 🎉",
             description: "Your topic idea has been submitted and will be checked.",
           });
         }



    setNewTopicRequest({ title: "", description: "", name: "", categories: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="topics" className="py-24 bg-muted/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Session Topics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suggest topics you'd like to present or discuss. Vote for your favorites!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Topic Suggestion Form */}
          <div className="lg:col-span-2">
            <Card className="glass-card shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="text-primary" />
                  Suggest a Topic
                </CardTitle>
                <CardDescription>
                  Have an idea? Share it with the community!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="topic-title">Topic Title *</Label>
                    <Input
                      id="topic-title"
                      placeholder="e.g., Reactive Streams Deep Dive"
                      value={newTopicRequest.title}
                      onChange={(e) => setNewTopicRequest({ ...newTopicRequest, title: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic-desc">Description</Label>
                    <Textarea
                      id="topic-desc"
                      placeholder="What would you like to cover?"
                      value={newTopicRequest.description}
                      onChange={(e) => setNewTopicRequest({ ...newTopicRequest, description: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic-name">Your Name *</Label>
                    <Input
                      id="topic-name"
                      placeholder="Your name"
                      value={newTopicRequest.name}
                      onChange={(e) => setNewTopicRequest({ ...newTopicRequest, name: e.target.value })}
                    />
                   </div>

                    <div className="space-y-2">
                        <Label htmlFor="topic-name">Categories (comma separated)</Label>
                        <Input
                          id="topic-categories"
                          placeholder="Spring, Graal VM"
                          value={newTopicRequest.categories}
                          onChange={(e) => setNewTopicRequest({ ...newTopicRequest, categories: e.target.value })}
                        />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Submitting...</>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Topic
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Topic List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={20} />
              <span className="font-semibold">{topics.length} Topics Suggested</span>
            </div>

            {topics.map((topic, index) => (
              <Card 
                key={topic.id} 
                className="glass-card hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-5">
                  <div className="flex gap-4">
                    {/* Vote Button */}
                    <button
                      onClick={() => handleVote(topic.id)}
                      className="flex flex-col items-center justify-center min-w-[60px] p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors group"
                    >
                      <ThumbsUp 
                        size={20} 
                        className="text-muted-foreground group-hover:text-primary transition-colors" 
                      />
                      <span className="text-lg font-bold mt-1">{topic.likes}</span>
                    </button>

                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{topic.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{topic.description}</p>
                      <div className="flex flex-wrap items-center gap-2">

                          <Badge key={topic.categories} variant="secondary" className="text-xs">
                            {topic.categories}
                          </Badge>

                        <span className="text-xs text-muted-foreground ml-auto">
                          by {topic.name}
                        </span>
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
