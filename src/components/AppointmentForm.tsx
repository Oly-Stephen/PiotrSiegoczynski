import React from 'react';
import './AppointmentForm.css';

interface AppointmentFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted');
        onClose();
    };

    return (
        <div className="appointment-overlay">
            <div className="appointment-form">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Umów Trening</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Imię i Nazwisko" required />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <input type="tel" id="phone" name="phone" placeholder="Telefon" required />
                    </div>
                    <div className="form-group">
                        <select id="training-type" name="training-type" required>
                            <option value="">Wybierz Rodzaj Treningu</option>
                            <option value="individual">Trening Indywidualny</option>
                            <option value="group">Trening Grupowy</option>
                            <option value="beginners">Kurs dla Początkujących</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                            type="datetime-local" 
                            id="preferred-date" 
                            name="preferred-date"
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Dodatkowe Uwagi (opcjonalnie)"
                            rows={4}
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Zarezerwuj Termin</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;