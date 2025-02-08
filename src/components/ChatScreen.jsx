import { useState, useRef, useEffect } from "react";
import { Box, TextField, IconButton, Typography, Avatar, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";
import { IoSend } from "react-icons/io5";

// const ChatContainer = styled(Paper)(() => ({
//   height: "80vh",
//   display: "flex",
//   flexDirection: "column",
//   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   borderRadius: "16px",
//   overflow: "hidden"
// }));

const MessagesArea = styled(Box)({
  flex: 1,
  overflowY: "auto",
  padding: "20px",
  "&::-webkit-scrollbar": {
    width: "6px"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ddd",
    borderRadius: "3px"
  }
});

const MessageBubble = styled(Box)(({ sent }) => ({
  display: "flex",
  alignItems: "flex-start",
  marginBottom: "16px",
  flexDirection: sent ? "row-reverse" : "row",
  gap: "12px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)"
  }
}));

const MessageContent = styled(Paper)(() => ({
  padding: "12px 16px",
  borderRadius: "12px",
  maxWidth: "70%",
  backgroundColor:"#287344",
  color:"#fff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
}));

const InputArea = styled(Box)({
  padding: "16px",
  borderTop: "1px solid #eee",
  backgroundColor: "#fff"
});

const StyledAvatar = styled(Avatar)({
  width: 40,
  height: 40,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)"
  }
});

const ChatScreen = () => {
  const [messages, setMessages] = useState(
    [
    {
      id: 1,
      user: "Sarah Chen",
      avatar: "images.unsplash.com/photo-1494790108377-be9c29b29330",
      text: "Hello",
      timestamp: "10:30 AM",
      sent: false
    },
    // {
    //   id: 2,
    //   user: "Alex Rodriguez",
    //   avatar: "images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    //   text: "Great! I'll review the changes and start the staging deployment.",
    //   timestamp: "10:32 AM",
    //   sent: true
    // },
    // {
    //   id: 3,
    //   user: "Maria Garcia",
    //   avatar: "images.unsplash.com/photo-1438761681033-6461ffad8d80",
    //   text: "Has anyone checked the load balancer configurations?",
    //   timestamp: "10:34 AM",
    //   sent: false
    // }
  ]
);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        user: "Meena Ramesh",
        avatar: "../assets/login_bg_1.jpg",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        sent: true
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <section className="h-dvh flex flex-col">
      <div className="flex-1 rounded-none flex flex-col">
        <Box p={2} bgcolor="#287344">
          <Typography variant="h6" className="text-[#fff]" fontWeight="bold">
            Community Chat
          </Typography>
          <Typography variant="body2" className="text-[#fff]">
            2 participants
          </Typography>
        </Box>

        <MessagesArea bgcolor="#f0fdf4">
          {messages.map((message) => (
            <MessageBubble key={message.id} sent={message.sent}>
              <StyledAvatar
                src={`${message.avatar}`}
                alt={message.user}
              />
              <Stack spacing={1} width="100%" alignItems={message.sent ? "flex-end" : "flex-start"}>
                <Typography variant="caption" color="text.secondary">
                  {message.user} • {message.timestamp}
                </Typography>
                <MessageContent sent={message.sent}>
                  <Typography>{message.text}</Typography>
                </MessageContent>
              </Stack>
            </MessageBubble>
          ))}
          <div ref={messagesEndRef} />
        </MessagesArea>

        <InputArea>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              variant="outlined"
              size="small"
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              sx={{
                backgroundColor: "#1976d2",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#1565c0"
                },
                "&.Mui-disabled": {
                  backgroundColor: "#ccc",
                  color: "#fff"
                }
              }}
            >
              <IoSend />
            </IconButton>
          </Stack>
        </InputArea>
      </div>
    </section>
  );
};

export default ChatScreen;