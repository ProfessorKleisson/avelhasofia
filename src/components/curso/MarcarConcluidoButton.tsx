import { useState, useEffect } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MarcarConcluidoButtonProps {
    topicId: string;
    areaColor?: string;
}

export function MarcarConcluidoButton({ topicId, areaColor = '#76c9ea' }: MarcarConcluidoButtonProps) {
    const [isCompleted, setIsCompleted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkCompletion = () => {
            const completedTopicsStr = localStorage.getItem('completedTopics');
            if (completedTopicsStr) {
                try {
                    const completedTopics = JSON.parse(completedTopicsStr);
                    setIsCompleted(!!completedTopics[topicId]);
                } catch (e) {
                    console.error("Error parsing completed topics", e);
                }
            }
        };
        
        checkCompletion();
        // Custom event to sync across tabs/components if needed
        window.addEventListener('topicCompleted', checkCompletion);
        return () => window.removeEventListener('topicCompleted', checkCompletion);
    }, [topicId]);

    const handleToggleComplete = () => {
        const completedTopicsStr = localStorage.getItem('completedTopics');
        let completedTopics: Record<string, boolean> = {};
        
        if (completedTopicsStr) {
            try {
                completedTopics = JSON.parse(completedTopicsStr);
            } catch (e) {
                console.error("Error parsing completed topics", e);
            }
        }

        const newState = !isCompleted;
        completedTopics[topicId] = newState;
        
        localStorage.setItem('completedTopics', JSON.stringify(completedTopics));
        setIsCompleted(newState);
        
        // Dispatch event for other components to react
        window.dispatchEvent(new Event('topicCompleted'));

        // If newly marked as complete, redirect to timeline
        if (newState) {
            navigate('/curso/linha-do-tempo');
        }
    };

    return (
        <div className="flex justify-center mt-16 mb-8">
            <button
                onClick={handleToggleComplete}
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-sofia-sans font-black uppercase text-sm tracking-widest transition-all duration-500 overflow-hidden"
                style={{
                    backgroundColor: isCompleted ? `${areaColor}20` : 'rgba(255, 255, 255, 0.05)',
                    borderColor: isCompleted ? areaColor : 'rgba(255, 255, 255, 0.1)',
                    borderWidth: '1px',
                    color: isCompleted ? areaColor : 'rgba(255, 255, 255, 0.7)'
                }}
            >
                {/* Background Hover Effect */}
                <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: areaColor }}
                />
                
                {/* Glow Effect */}
                {isCompleted && (
                   <div 
                       className="absolute inset-0 opacity-20 blur-xl pointer-events-none"
                       style={{ backgroundColor: areaColor }}
                   />
                )}

                <div className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full border border-current transition-transform group-hover:scale-110">
                    {isCompleted ? (
                        <CheckCircle2 size={16} className="fill-current text-black" />
                    ) : (
                        <Circle size={16} />
                    )}
                </div>
                
                <span className="relative z-10 text-shadow-strong">
                    {isCompleted ? 'Tópico Concluído' : 'Marcar como Concluído'}
                </span>
            </button>
        </div>
    );
}
