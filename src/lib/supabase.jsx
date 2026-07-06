import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pdqzxcocktxqorwmjhvq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkcXp4Y29ja3R4cW9yd21qaHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNTkzMDUsImV4cCI6MjA5ODYzNTMwNX0.SR7oshaZ120840PUszgrNmpemREcUoGXbvCIHvIaPCU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Auth functions
export async function signUp(email, password, fullName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
  return { data, error };
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getCurrentUser() {
  const { data: { user }, error } = await supabase.auth.getUser();
  return { user, error };
}

export async function getUserProfile(userId) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
}

export async function updateUserProfile(userId, updates) {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();
  return { data, error };
}

// Comments functions
export async function getComments(postSlug) {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('post_slug', postSlug)
    .eq('approved', true)
    .order('created_at', { ascending: false });
  return { data, error };
}

export async function addComment(postSlug, name, email, content, userId = null) {
  const { data, error } = await supabase
    .from('comments')
    .insert([
      {
        post_slug: postSlug,
        name,
        email,
        content,
        user_id: userId,
        approved: false,
      },
    ])
    .select()
    .single();
  return { data, error };
}

export async function deleteComment(commentId, userId) {
  const { data, error } = await supabase
    .from('comments')
    .delete()
    .eq('id', commentId)
    .eq('user_id', userId);
  return { data, error };
}

// Newsletter functions
export async function subscribeToNewsletter(email) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email, subscribed: true }])
    .select()
    .single();
  return { data, error };
}

export async function unsubscribeFromNewsletter(email) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .update({ subscribed: false })
    .eq('email', email);
  return { data, error };
}

// Contact form functions
export async function submitContactForm(name, email, subject, message) {
  const { data, error } = await supabase
    .from('contact_submissions')
    .insert([
      {
        name,
        email,
        subject,
        message,
      },
    ])
    .select()
    .single();
  return { data, error };
}

// Auth state listener
export function onAuthStateChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(
    (event, session) => {
      callback(session?.user || null);
    }
  );
  return subscription;
}
