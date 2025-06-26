import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  InputBase,
  Button,
  Fade,
  TextField,
  Snackbar,
  CircularProgress
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import { styled } from '@mui/system';

interface MessageProps {
  fromUser: boolean;
}

const FloatingIcon = styled(IconButton)({
  position: 'fixed',
  bottom: 24,
  right: 24,
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #0078d4, #0059b3)',
  color: '#fff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  zIndex: 999,
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.4)',
  },
});

const ChatContainer = styled(Box)({
  position: 'fixed',
  bottom: 100,
  right: 24,
  width: 380,
  maxHeight: 520,
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  borderRadius: 20,
  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
  overflow: 'hidden',
  zIndex: 1000,
});

const ChatHeader = styled(Box)({
  background: 'linear-gradient(135deg, #0078d4, #0059b3)',
  color: '#fff',
  padding: 16,
  textAlign: 'center',
  fontWeight: 600,
  fontSize: 18,
});

const ChatBody = styled(Box)({
  flex: 1,
  padding: 16,
  overflowY: 'auto',
  background: '#f3f6fb',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const Message = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fromUser',
})<MessageProps>(({ fromUser }) => ({
  alignSelf: fromUser ? 'flex-end' : 'flex-start',
  background: fromUser ? '#0078d4' : '#e3eaf2',
  color: fromUser ? '#fff' : '#000',
  padding: '10px 14px',
  borderRadius: 16,
  fontSize: 14,
  maxWidth: '85%',
}));

const ChatFooter = styled(Box)({
  padding: '10px 14px',
  borderTop: '1px solid #ddd',
  background: '#fff',
});

const ChatInput = styled(InputBase)({
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: 10,
  padding: 10,
  fontSize: 14,
});

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [snackbar, setSnackbar] = useState(false);
  const [loadingForm, setLoadingForm] = useState(false);
  const chatEndRef = useRef(null);
  const typeRef = useRef('');

  useEffect(() => {
    if (open && messages.length === 0) {
      showMainMenu();
    }
    scrollToBottom();
  }, [messages, open]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const showMainMenu = () => {
    botMessage('Hi 👋! Welcome to CurrentEdge. How can I help you today?', [
      { label: 'Sales', onClick: showSalesOptions },
      { label: 'Service', onClick: showServiceOptions },
      { label: 'Support', onClick: () => showContactForm('support') },
      { label: 'Contact Info', onClick: showContactInfo },
    ]);
  };

  const showSalesOptions = () => {
    botMessage('Choose a product or solution:', [
      { label: 'Packaging', onClick: () => showProductActions('/products/packaging-machines') },
      { label: 'Printing', onClick: () => showProductActions('/products/printing-solutions') },
      { label: 'Inspection', onClick: () => showProductActions('/products/inspection-solutions') },
      { label: 'Water Treatment', onClick: () => showProductActions('/products/water-treatment') },
      { label: 'Vending', onClick: () => showProductActions('/products/display-advertising') },
      { label: 'Display & Ads', onClick: () => showProductActions('/products/display-advertising') },
      { label: '⬅️ Back', onClick: showMainMenu },
    ]);
  };

  const showProductActions = (link: string) => {
    botMessage('What would you like to do next?', [
      { label: '🔗 View Product', onClick: () => window.open(link, '_blank') },
      { label: '🧑 Talk to Sales', onClick: () => showContactForm('sales') },
      { label: '⬅️ Back', onClick: showSalesOptions },
    ]);
  };

  const showServiceOptions = () => {
    botMessage('What service do you need help with?', [
      { label: 'Technical Issue', onClick: () => showContactForm('technical') },
      { label: 'Installation Help', onClick: () => showContactForm('installation') },
      { label: 'Maintenance', onClick: () => showContactForm('maintenance') },
      { label: 'Talk to Team', onClick: () => showContactForm('service') },
      { label: '⬅️ Back', onClick: showMainMenu },
    ]);
  };

  const showContactInfo = () => {
    botMessage('📧 Email: support@currentedge.in\n📞 Phone: +91-XXXXXXXXXX', [
      { label: '⬅️ Back', onClick: showMainMenu },
    ]);
  };

  const botMessage = (text: string, buttons: any[] = []) => {
    setMessages((prev) => [...prev, { text, fromUser: false, buttons }]);
  };

  const userMessage = (text: string) => {
    setMessages((prev) => [...prev, { text, fromUser: true }]);
  };

  const showContactForm = (type: string) => {
    typeRef.current = type;
    botMessage("Please provide your details and message. We'll get back to you shortly.");
    setMessages((prev) => [...prev, {
      text: '',
      fromUser: false,
      form: <FormWrapper key={loadingForm ? 'loading' : 'form'} />
    }]);
  };

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!input.trim()) return;
      userMessage(input);
      setInput('');
      setTimeout(() => {
        botMessage("I'm still learning to understand typed questions. Please use the buttons above.");
      }, 800);
    }
  };

  const FormWrapper = () => {
    return loadingForm ? (
      <Box display="flex" justifyContent="center" py={3}>
        <CircularProgress />
      </Box>
    ) : (
      <Box
        component="form"
        onSubmit={async (e: any) => {
          e.preventDefault();
          setLoadingForm(true);
          const formData = new FormData(e.target);
          const res = await fetch('/api/send-email', {
            method: 'POST',
            body: formData,
          });
          setLoadingForm(false);

          if (res.ok) {
            setSnackbar(true);
            setMessages((prev) => [...prev, { text: '✅ Thanks for submitting your request. We’ll get in touch shortly.', fromUser: false }]);
            setTimeout(() => {
              showMainMenu();
            }, 1500);
          } else {
            setMessages((prev) => [...prev, { text: '❌ Something went wrong. Please try again later.', fromUser: false }]);
          }
        }}
        sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <input type="hidden" name="type" value={typeRef.current} />
        <TextField name="name" label="Your Name" required size="small" />
        <TextField name="email" label="Your Email" required size="small" />
        <TextField name="phone" label="Phone Number" required size="small" />
        <TextField name="company" label="Company Name" required size="small" />
        <TextField name="message" label="Describe your request" required size="small" multiline rows={3} />
        <input type="file" name="attachment" />
        <Box display="flex" gap={1} alignItems="center">
          <Button type="submit" variant="contained" disabled={loadingForm}>
            {loadingForm ? (
              <><CircularProgress size={20} sx={{ color: '#fff', mr: 1 }} /> Sending...</>
            ) : 'Submit'}
          </Button>
          <Button onClick={showMainMenu} variant="outlined">⬅️ Back</Button>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <FloatingIcon onClick={() => setOpen(!open)}>
        <ChatIcon />
      </FloatingIcon>
      {open && (
        <Fade in={open}>
          <ChatContainer>
            <ChatHeader>
              <i className="fas fa-robot" /> CurrentEdge Assistant
            </ChatHeader>
            <ChatBody>
              {messages.map((msg, index) => (
                <Box key={index}>
                  {msg.text ? (
                    <Message fromUser={msg.fromUser}>{msg.text}</Message>
                  ) : msg.form ? (
                    <Box sx={{ alignSelf: 'flex-start' }}>{msg.form}</Box>
                  ) : null}

                  {msg.buttons && (
                    <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {msg.buttons.map((btn: any, i: number) => (
                        <Button
                          key={i}
                          onClick={btn.onClick}
                          variant="outlined"
                          size="small"
                          sx={{ textAlign: 'left' }}
                        >
                          {btn.label}
                        </Button>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
              <div ref={chatEndRef} />
            </ChatBody>
            <ChatFooter>
              <ChatInput
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInput}
              />
            </ChatFooter>
          </ChatContainer>
        </Fade>
      )}

      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={() => setSnackbar(false)}
        message="Message sent successfully!"
      />

      {/* 🔄 Fullscreen loading overlay */}
      {loadingForm && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1200,
          }}
        >
          <CircularProgress size={60} sx={{ color: '#fff' }} />
        </Box>
      )}
    </>
  );
};

export default Chatbot;
