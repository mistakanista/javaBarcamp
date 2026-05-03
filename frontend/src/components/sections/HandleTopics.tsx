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
    const [topicRequest, setTopicRequest] = useState({ title: "", description: "", name: "", categories: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [topicsFetched, setTopicsFetched] = useState(false);
    const [message, setMessage] = useState("");

    const updateTopic = (id, field, value) => {
        setTopics(prev =>
            prev.map(t =>
                t.id === id ? { ...t, [field]: value } : t
            )
        );
    };

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

    }, [topicsFetched],);


    const handleDelete = async (id: number) => {
        const response = await fetch(`/api/topics/delete/${id}`, {
            method: "DELETE",
        });

        if (response.status === 204) {
            toast({
                title: "Topic Deleted!",
                description: "The topic has been successfully removed.",
            });

        } else {
            toast({
                title: "Topic deletion failed",
                description: "There was an error when trying to delete a topic.",
                variant: "destructive",
            });
        }

        setIsSubmitting(false);
        setTopicsFetched(false);
    };

    const handleSubmit = async (topic: Topic) => {

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
                title: topicRequest.title || topic.title,
                description: topicRequest.description || topic.description,
                name: topicRequest.name || topic.name,
                categories: topicRequest.categories || topic.categories,
            }),
        });

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
        setTopicsFetched(false);
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
                                    <form>
                                        <div className="flex gap-4">

                                            {/* Content */}
                                            <div className="flex-1">
                                                <div className="grid lg:grid-cols-2 gap-8">

                                                    <div className="lg:col-span-1">
                                                        <Label htmlFor="topic-title">Title</Label>
                                                        <Input
                                                            id="topic-title"
                                                            value={topic.title}
                                                            onChange={(e) => updateTopic(topic.id, "title", e.target.value)}

                                                        />

                                                    </div>
                                                    <div className="lg:col-span-1">
                                                        <Label htmlFor="topic-desc">Description</Label>
                                                        <Textarea
                                                            id="topic-desc"
                                                            placeholder="What would you like to cover?"
                                                            value={topic.description}
                                                            onChange={(e) => updateTopic(topic.id, "description", e.target.value)}

                                                            rows={2}
                                                        />

                                                    </div>
                                                </div>
                                                <div className="grid lg:grid-cols-2 gap-8">
                                                    <div className="lg:col-span-1">
                                                        <Label htmlFor="topic-categories">Categories</Label>
                                                        <Input
                                                            id="topic-categories"
                                                            value={topic.categories}
                                                            onChange={(e) => updateTopic(topic.id, "categories", e.target.value)}

                                                        />
                                                    </div>
                                                    <div className="lg:col-span-1">
                                                        <Label htmlFor="topic-name">Name</Label>
                                                        <Input
                                                            id="topic-name"
                                                            value={topic.name}
                                                            onChange={(e) => updateTopic(topic.id, "name", e.target.value)}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid lg:grid-cols-2 gap-8 mt-4">
                                                    <div className="lg:col-span-1">
                                                        <Button type="button" onClick={() => handleSubmit(topic)} className="w-full" disabled={isSubmitting}>
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
                                                    <div className="lg:col-span-1">
                                                        <Button type="button" onClick={() => handleDelete(topic.id)} className="w-full" disabled={isSubmitting}>
                                                            {isSubmitting ? (
                                                                <>Submitting...</>
                                                            ) : (
                                                                <>
                                                                    <Send size={16} />
                                                                    Delete Topic
                                                                </>
                                                            )}
                                                        </Button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
