
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ResetPassword component mounted");
    console.log("Search params:", Object.fromEntries(searchParams.entries()));
    
    // Vérifier si nous avons les paramètres nécessaires pour la réinitialisation
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    const tokenHash = searchParams.get('token_hash');
    const type = searchParams.get('type');
    
    console.log("Token parameters:", { accessToken: !!accessToken, refreshToken: !!refreshToken, tokenHash: !!tokenHash, type });
    
    // Si nous avons un token_hash et que le type est recovery, utiliser la nouvelle méthode
    if (tokenHash && type === 'recovery') {
      console.log("Using token hash method");
      supabase.auth.verifyOtp({
        token_hash: tokenHash,
        type: 'recovery'
      }).then(({ error }) => {
        if (error) {
          console.error("Error verifying OTP:", error);
          toast.error("Lien de réinitialisation invalide ou expiré");
          navigate("/auth");
        } else {
          console.log("OTP verified successfully");
        }
      });
    } else if (accessToken && refreshToken) {
      console.log("Using access/refresh token method");
      // Établir la session avec les tokens
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken
      }).then(({ error }) => {
        if (error) {
          console.error("Error setting session:", error);
          toast.error("Lien de réinitialisation invalide ou expiré");
          navigate("/auth");
        } else {
          console.log("Session set successfully");
        }
      });
    } else {
      console.log("No valid tokens found, checking if user is already authenticated");
      // Vérifier si l'utilisateur est déjà connecté
      supabase.auth.getSession().then(({ data: { session }, error }) => {
        if (error) {
          console.error("Error getting session:", error);
          toast.error("Erreur lors de la vérification de la session");
          navigate("/auth");
        } else if (!session) {
          console.log("No session found, redirecting to auth");
          toast.error("Lien de réinitialisation invalide ou expiré");
          navigate("/auth");
        } else {
          console.log("User is authenticated, can proceed with password reset");
        }
      });
    }
  }, [searchParams, navigate]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }

    if (password.length < 6) {
      toast.error("Le mot de passe doit contenir au moins 6 caractères");
      return;
    }

    setLoading(true);

    try {
      console.log("Attempting to update password");
      const { error } = await supabase.auth.updateUser({
        password: password
      });

      if (error) {
        console.error("Erreur lors de la réinitialisation:", error);
        toast.error(`Erreur: ${error.message}`);
      } else {
        console.log("Password updated successfully");
        toast.success("Mot de passe mis à jour avec succès !");
        // Attendre un peu avant de rediriger pour que l'utilisateur voie le message
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      console.error("Erreur inattendue:", error);
      toast.error("Une erreur inattendue s'est produite");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/8 via-background to-purple-500/8 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/auth")}
              className="p-1"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-2xl">Nouveau mot de passe</CardTitle>
          </div>
          <CardDescription>
            Choisissez un nouveau mot de passe pour votre compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Nouveau mot de passe (min. 6 caractères)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            
            <div className="space-y-2 relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmer le mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Mise à jour..." : "Mettre à jour le mot de passe"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
