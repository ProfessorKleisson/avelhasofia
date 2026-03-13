import os
import re

mapping = {
    "TalesDeMileto.tsx": ["Tales de Mileto.png"],
    "AnaximandroDeMileto.tsx": ["Anaximandro Apeiron.png"],
    "AnaxímenesDeMileto.tsx": ["Anaxímenes.png"],
    "PitágorasDeSamos.tsx": ["Pitágoras.png"],
    "HeráclitoDeÉfeso.tsx": ["Heráclito.png"],
    "ParmênidesDeEleia.tsx": ["Parmenides.png"],
    "EmpédoclesDeAgrigento.tsx": ["Empédocles.png"],
    "SócratesDeAtenas.tsx": ["Sócrates.png"],
    "ZenãoDeEleia.tsx": ["Zenão de Eleia.png"],
    "DemócritoDeAbdera.tsx": ["Demócrito.png"],
    "PlatãoDeAtenas.tsx": ["Platão.png", "Platão 2.png", "A alegoria da Caverna.png"]
}

base_dir = r"src\pages\curso\filosofia\antiga"

for filename, images in mapping.items():
    filepath = os.path.join(base_dir, filename)
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        continue
        
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # ensure imports are present
    if "InfographicZoom" not in content:
        # add import InfographicZoom
        # find last import
        matches = list(re.finditer(r'^import .*?;$', content, flags=re.MULTILINE))
        if matches:
            last_import = matches[-1]
            idx = last_import.end()
            content = content[:idx] + '\nimport { InfographicZoom } from "../../../../components/InfographicZoom";' + content[idx:]
        else:
            content = 'import { InfographicZoom } from "../../../../components/InfographicZoom";\n' + content

    if "GraduationCap" not in content:
        # we can just add GraduationCap to lucide-react if it exists
        if "lucide-react" in content:
            content = re.sub(r'import\s+\{([^}]+)\}\s+from\s+"lucide-react";', lambda m: m.group(0) if "GraduationCap" in m.group(1) else m.group(0).replace("}", ", GraduationCap }"), content)
        else:
            # find where to add it
            matches = list(re.finditer(r'^import .*?;$', content, flags=re.MULTILINE))
            if matches:
                last_import = matches[-1]
                idx = last_import.end()
                content = content[:idx] + '\nimport { GraduationCap } from "lucide-react";' + content[idx:]
            
    # generate the sections for the images
    name_clean = filename.replace("DeMileto", "").replace("DeSamos", "").replace("DeÉfeso", "").replace("DeEleia", "").replace("DeAgrigento", "").replace("DeAtenas", "").replace("DeAbdera", "").replace(".tsx", "")
    sections_html = ""
    for img in images:
        title = "Infográfico " + name_clean
        if "Caverna" in img:
            title = "Alegoria da Caverna"
        if "2" in img:
            title += " (Parte 2)"
        
        sections_html += f"""
                    <section class="mt-8">
                        <div class="bg-white/[0.02] border border-white/5 p-4 rounded-xl overflow-hidden group">
                            <img src="/img/filosofia/antiga/infograficos/{img}" alt="{title}" class="w-full h-auto hover:scale-[1.02] transition-transform duration-700" />
                        </div>
                    </section>"""
                    
    infographic_code = f"""
                    {{/* Infographic Section */}}
                    <div className="mt-20 p-1 rounded-3xl bg-gradient-to-br from-violet-500/20 to-transparent border border-violet-500/10">
                        <div className="bg-[#0a0a0c]/80 rounded-3xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                                    <GraduationCap size={{16}} className="text-violet-400" />
                                </div>
                                <h2 className="text-lg font-sofia-serif font-black text-violet-400 uppercase tracking-widest italic">Síntese Visual</h2>
                            </div>
                            <InfographicZoom html={{`{sections_html}`}} title="Síntese Visual" />
                        </div>
                    </div>

"""

    # If it already has an infographic block, let's remove it so we don't duplicate
    if "Infographic Section" in content:
        content = re.sub(r'\{\/\*\s*Infographic Section\s*\*\/\}.*?<\/div>\s*<\/div>', infographic_code.strip(), content, flags=re.DOTALL)
    else:
        # insert before </article>
        content = content.replace("</article>", infographic_code + "</article>")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Updated {filename}")
