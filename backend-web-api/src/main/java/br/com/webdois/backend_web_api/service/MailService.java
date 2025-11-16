package br.com.webdois.backend_web_api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import jakarta.mail.internet.MimeMessage;

@Service
public class MailService {
    
    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String remetente;

    public String sendEmail(String destinatario, String assunto, String senhaGerada) {
        try {

            String mensagemHtml = """
                <div style="font-family: Arial, sans-serif; background-color:#f3f0ff; padding:30px;">
                  <div style="max-width:600px; margin:auto; background:white; border-radius:12px; padding:35px; box-shadow:0 4px 15px rgba(0,0,0,0.05);">

                    <div style="text-align:center; margin-bottom:25px;">
                      <h1 style="color:#5a2dff; margin:0; font-size:28px;">Sistema de Manutenção</h1>
                      <p style="color:#7c6fe7; font-size:15px; margin:5px 0 0;">
                        Acesso liberado! Sua senha foi criada com sucesso.
                      </p>
                    </div>

                    <p style="font-size:16px; color:#444; line-height:1.6;">
                      Olá,<br><br>
                      Seu acesso ao sistema foi liberado, use sua senha e logue no sistema.
                      Abaixo está sua <strong>senha</strong> criada automaticamente:
                    </p>

                    <div style="
                      background:#5a2dff;
                      color:#ffffff;
                      padding:18px;
                      border-radius:8px;
                      text-align:center;
                      font-size:22px;
                      font-weight:bold;
                      letter-spacing:2px;
                      margin:25px 0;
                    ">
                      """ + senhaGerada + """
                    </div>

                    <p style="font-size:12px; color:#999; text-align:center; margin-top:40px;">
                      © 2025 Sistema de Manutenção — Todos os direitos reservados.
                    </p>

                  </div>
                </div>
                """;

            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true, "UTF-8");

            helper.setFrom(remetente);
            helper.setTo(destinatario);
            helper.setSubject(assunto);
            helper.setText(mensagemHtml, true);

            mailSender.send(mimeMessage);
            return "Email enviado com sucesso!";

        } catch (Exception e) {
            return "Erro ao enviar email: " + e.getMessage();
        }
    }
}
