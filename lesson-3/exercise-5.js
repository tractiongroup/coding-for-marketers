// Esercizio per casa 4: Analisi Engagement Social Media
// Verificare se almeno un post ha raggiunto l'obiettivo di engagement

const socialPosts = [
    { platform: 'Instagram', likes: 432, comments: 21 },
    { platform: 'Facebook', likes: 125, comments: 13 },
    { platform: 'LinkedIn', likes: 243, comments: 8 },
    { platform: 'Twitter', likes: 89, comments: 5 }
];

// Calcolare l'engagement (likes + comments) e verificare se almeno
// un post ha superato 400 interazioni
const hasHighEngagement = socialPosts.some(post => {
    const engagement = post.likes + post.comments;
    return engagement > 400;
});

console.log('Almeno un post ha alto engagement:', hasHighEngagement);
