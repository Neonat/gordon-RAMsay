import React, { useState } from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";

function ShareRecipe({ recipe }) {
    const [customMessage, setCustomMessage] = useState("");

    const shareUrl = window.location.href; // Can be a specific recipe URL

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3>Share this Recipe</h3>
            <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Add your custom message..."
                style={{ width: "100%", height: "60px", marginBottom: "10px" }}
            />

            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                {/* Facebook Share */}
                <FacebookShareButton url={shareUrl} quote={`${customMessage}\n${recipe.name}`}>
                    <button>Share on Facebook</button>
                </FacebookShareButton>

                {/* Twitter Share */}
                <TwitterShareButton url={shareUrl} title={`${customMessage} - ${recipe.name}`}>
                    <button>Share on Twitter</button>
                </TwitterShareButton>

                {/* WhatsApp Share */}
                <WhatsappShareButton url={shareUrl} title={`${customMessage} - ${recipe.name}`}>
                    <button>Share on WhatsApp</button>
                </WhatsappShareButton>
            </div>
        </div>
    );
}

export default ShareRecipe;
